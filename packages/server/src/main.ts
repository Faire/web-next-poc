import cookieParser from "cookie-parser";
import express from "express";
import fs from "fs";
import next from "next";
// eslint-disable-next-line import/no-unassigned-import
import "zone.js";

import { backendProxy } from "./backendProxy";
import { EnvironmentStore } from "./EnvironmentStore";
import log from "./logging";
import { zone } from "./zone";

const main = async () => {
  const { isDevelopment, port, hostname } = EnvironmentStore.get();

  const nextServer = next({
    dev: isDevelopment,
    hostname,
    port,
    dir: "../client",
  });
  await nextServer.prepare();
  const handle = nextServer.getRequestHandler();

  const expressServer = express();
  // We don't want to display "X-Powered-By: Express" in the response header
  expressServer.disable("x-powered-by");

  expressServer.use(zone);
  expressServer.use(backendProxy);
  expressServer.use(cookieParser());
  expressServer.use(express.json());

  expressServer.post("*", async (req, res) => {
    // Persist page data
    fs.writeFileSync(
      `../${req.body.requestId}.json`,
      JSON.stringify(req.body.pageData)
    );
    // Append the request id to the url
    const url = new URL(req.url, `https://${req.headers.host}`);
    url.searchParams.append("requestId", req.body.requestId);
    // Redirect to the same page
    return res.redirect(`${url.pathname}${url.search}`);
  });

  expressServer.get("*", async (req, res) => {
    return handle(req, res);
  });

  expressServer.listen(port, () => {
    log.info(`Express server listening on port ${port}`);
    log.info(`BACKEND_URL: ${EnvironmentStore.get().BACKEND_URL}`);
    log.info(`LOCAL_PROD: ${EnvironmentStore.get().isLocalHostedProd}`);
    log.info(`STATIC_ROOT: ${EnvironmentStore.get().STATIC_ROOT}`);
  });
};

main();

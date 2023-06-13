import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const NEXT_SERVER_URL = `http://localhost:4000`;
const ROUTES = ["/", "/about"];

const backendWeb = async () => {
  const app = express();

  app.get(ROUTES, createProxyMiddleware({ target: NEXT_SERVER_URL }));
  app.get("/_next/*", createProxyMiddleware({ target: NEXT_SERVER_URL }));

  app.listen(4001, () => {
    // eslint-disable-next-line no-console
    console.log("backend-web listening on port 4001");
  });
};

backendWeb();

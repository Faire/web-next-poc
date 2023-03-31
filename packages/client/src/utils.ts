import fs from "fs";
import { IncomingMessage } from "http";

export const getPageData = (req: IncomingMessage) => {
  if (!req.url) {
    throw new Error("Missing url");
  }

  // Get the request id from the url
  // eslint-disable-next-line @faire/require-https
  const url = new URL(req.url, `http://${req.headers.host}`);
  const requestId = url.searchParams.get("requestId");
  if (!requestId) {
    return null;
  }

  // Get the page data from the context
  const pageDataString = fs.readFileSync(`../${requestId}.json`, "utf8");
  const pageData = JSON.parse(pageDataString);
  if (!pageData) {
    throw new Error("Missing page data");
  } else {
    fs.unlinkSync(`../${requestId}.json`);
  }

  return pageData;
};

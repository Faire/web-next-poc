import { IncomingMessage, ServerResponse } from "http";
import httpProxy from "http-proxy";
import { Agent } from "https";

export const config = {
  api: {
    externalResolver: true,
    bodyParser: false,
  },
};

/**
 * Proxies api requests to https://www.faire-stage.com
 * @param req
 * @param res
 */
export default function handle(
  req: IncomingMessage,
  res: ServerResponse<IncomingMessage>
) {
  new Promise((resolve, reject) => {
    const proxy: httpProxy = httpProxy.createProxy({
      target: "https://www.faire-stage.com",
      changeOrigin: true,
      agent: new Agent({
        keepAlive: true,
        keepAliveMsecs: 1000,
        maxSockets: 10,
        maxFreeSockets: 10,
        timeout: 60000,
      }),
      ws: true,
      secure: true,
      autoRewrite: true,
    });
    proxy.once("proxyRes", resolve).once("error", reject).web(req, res);
  });
}

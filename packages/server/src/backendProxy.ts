import { faireBaseUrl } from "@faire/web/dist/common/routes/faireBaseUrl";
import { Request, RequestHandler } from "express";
import { ParamsDictionary, Query } from "express-serve-static-core";
import { createProxyMiddleware, Options } from "http-proxy-middleware";

import { EnvironmentStore } from "./EnvironmentStore";

interface BackendProxyOptions {
  // Specific target URL to use.
  target?: string;
  // Whether to leave out the development header.
  omitDevHeader?: boolean;
}

function proxyOptions(req: Request, options?: BackendProxyOptions): Options {
  const originalUrl = new URL(req.url, `${req.protocol}://${req.hostname}`);

  const headers: { "X-IF-DEVELOPMENT"?: string } = {};
  if (!options?.omitDevHeader) {
    headers["X-IF-DEVELOPMENT"] = `${req.protocol}://${req.get("host")}${
      req.originalUrl
    }`;
  }

  // We use http for dev flow
  // ie: http://localhost:3009 instead of https://localhost:3009
  const protocolRewrite =
    process.env.NODE_ENV !== "production" ? "http" : undefined;

  const fallbackTarget = EnvironmentStore.get().isLocalBackend
    ? faireBaseUrl(8080)
    : "https://www.faire-stage.com";

  const target = options?.target ?? fallbackTarget;

  return {
    target,
    headers,
    changeOrigin: target !== originalUrl.origin,
    cookieDomainRewrite: req.hostname,
    logLevel: "debug",
    ws: true,
    secure: true,
    autoRewrite: true,
    protocolRewrite,
    onError: (err, _request, res) => {
      try {
        // eslint-disable-next-line no-console
        console.log(
          `Received proxy error: ${err.message} for ${
            req.path
          } with this response status code ${
            res.statusCode
          } and headers: ${JSON.stringify(res.getHeaders())}`
        );
      } catch {
        // eslint-disable-next-line no-console
        console.log(
          `Received proxy error: ${err.message} for ${req.path} with this response status code ${res.statusCode}`
        );
      }
    },
  };
}

function createBackendProxy(options?: BackendProxyOptions) {
  const cache: Record<string, RequestHandler> = {};
  const backendProxy: RequestHandler = (req, resp, next) => {
    let handler = cache[req.originalUrl];
    if (!handler) {
      handler = cache[req.originalUrl] = createProxyMiddleware(
        proxyOptions(req, options)
      );
    }
    return handler(req, resp, next);
  };
  return backendProxy;
}

const cache = {
  CDNProxy: createProxyMiddleware({
    changeOrigin: true,
    target: "https://cdn.faire.com",
  }),
  backendClusterProxy: createBackendProxy({
    target: EnvironmentStore.get().BACKEND_URL,
  }),
};

function getProxyForRequest(
  req: Request<
    ParamsDictionary,
    unknown,
    unknown,
    Query,
    Record<string, unknown>
  >
): RequestHandler | undefined {
  const reqPath = req.path;
  switch (true) {
    case reqPath.startsWith("/static/fonts"):
    case /favicon(?:_v2)?\.ico/.test(reqPath):
    case /^\/static\/css\/home\.min.*$/.test(reqPath):
      return cache.CDNProxy;
    case reqPath.startsWith("/api"):
      return cache.backendClusterProxy;
    case reqPath.startsWith("/_status"):
    case reqPath.startsWith("/_next"):
    default:
      return undefined;
  }
}

/**
 * Thin middleware to decide whether to serve the request inside the Node server,
 * or proxy to BE instead.
 */
export const backendProxy: RequestHandler = async (req, res, next) => {
  const proxy = getProxyForRequest(req);
  if (proxy) {
    return proxy(req, res, () => {
      res.end();
    });
  }
  next();
};

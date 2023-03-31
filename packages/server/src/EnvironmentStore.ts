import { DEFAULT_LOCALE } from "@faire/web/dist/common/consts/DEFAULT_LOCALE";
import { EnvironmentFactory } from "@faire/web/dist/common/EnvironmentStore";
import { singletonGetter } from "@faire/web/dist/common/singletons/getter";
import { envName } from "@faire/web/dist/common/user-agent/envName";
import * as path from "path";

export interface IEnvironmentVars {
  /**
   * Port this server runs on
   */
  PORT: string;
  /**
   * Hostname this server runs on
   */
  HOSTNAME: string;
  /**
   * Env (cluster) this server is running in (staging, prod).
   */
  env: string;
  /**
   * Node build env. Applies to local builds only.
   */
  NODE_ENV: string;
  /**
   * Whether to emulate production behaviours in the local build.
   */
  LOCAL_PROD: string;
  /**
   * Whether to use a local backend.
   */
  USE_LOCAL: string;

  // URL of backend-web
  BACKEND_URL: string;

  // CI_AUTH_TOKEN secret for outgoing s2s HTTP requests.
  CI_AUTH_TOKEN: string;

  // Represents the build version for the docker image.
  BUILD_SHA: string;

  // Similar to BUILD_SHA, but this is targeting the CSS version.
  CSS_SHA: string;

  // App ID for the DD_RUM visitor app.
  DD_RUM_APPLICATION_ID: string;
  // Client-side secret for the DD_RUM visitor app.
  DD_RUM_CLIENT_TOKEN: string;
  DD_SERVICE: string;
  DD_DOGSTATSD_SOCKET: string;

  SUPPORT_SSR: string;
  GRPC_PORT: string;
  BUILD_LOCALE: string;
  SHOULD_BUILD_LOCALIZED_BUNDLES: string;
}

export class EnvironmentStore extends EnvironmentFactory<IEnvironmentVars>() {
  static get = singletonGetter(EnvironmentStore);

  /**
   * Base URL for the backend server.
   */
  get BACKEND_URL(): string {
    return this.getOrDefault(
      "BACKEND_URL",
      "http://backend.default.svc.cluster.local"
    );
  }

  get datadogRUMAppId(): string | undefined {
    return this.getOrDefault("DD_RUM_APPLICATION_ID", undefined);
  }

  get datadogRUMClientToken(): string | undefined {
    return this.getOrDefault("DD_RUM_CLIENT_TOKEN", undefined);
  }

  get ciAuthToken(): string | undefined {
    return this.getOrDefault("CI_AUTH_TOKEN", undefined);
  }

  get grpcPort(): number {
    return parseInt(this.getOrDefault("GRPC_PORT", "50051"), 10);
  }

  get statsDProtocol() {
    const socket = this.getOrDefault("DD_DOGSTATSD_SOCKET", undefined);
    return socket ? "uds" : "udp";
  }

  /**
   * This function tells whether we are in production env.
   */
  get isProduction(): boolean {
    return this.envName === "production";
  }

  get envName(): string {
    return envName() || this.get("NODE_ENV");
  }

  get isTest(): boolean {
    return this.envName === "test";
  }

  get isLocalOrTest(): boolean {
    return this.isTest || this.isLocalBackend || this.isDevelopment;
  }

  get buildLocale(): string {
    if (!this.getOrDefault("SHOULD_BUILD_LOCALIZED_BUNDLES", undefined)) {
      return DEFAULT_LOCALE;
    }
    return this.getOrDefault("BUILD_LOCALE", DEFAULT_LOCALE);
  }

  /**
   * Path to the root folder for the built React app.
   * Currently only relevant for the dev flow.
   */
  get STATIC_ROOT() {
    return path.resolve(__dirname, `../../../build/${this.buildLocale}/static`);
  }

  get assetManifestPath() {
    return path.resolve(
      process.cwd(),
      "build",
      this.buildLocale,
      "asset-manifest.json"
    );
  }

  get port(): number {
    return parseInt(this.getOrDefault("PORT", "3009"), 10);
  }

  get hostname(): string {
    return this.getOrDefault("HOSTNAME", "localhost");
  }

  get isDevelopment(): boolean {
    return this.envName === "development";
  }

  get isLocalHostedProd(): boolean {
    return this.getOrDefault("LOCAL_PROD", undefined) === "1";
  }

  get isLocalBackend() {
    return this.getOrDefault("USE_LOCAL", "false") === "true";
  }

  get releaseVersion(): string {
    if (
      EnvironmentStore.get().isDevelopment ||
      EnvironmentStore.get().isLocalHostedProd
    ) {
      return "static:static:0";
    }
    return ""; // TODO: find a way to determine next build versions
  }
}

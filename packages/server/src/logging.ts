import Levels, {
  LogHandler,
  defaultLogHandler,
  setLogHandler,
} from "@faire/web/dist/common/serverLogging";

import { EnvironmentStore } from "./EnvironmentStore";

const logHandler: LogHandler = (emitter, level, msg, details) => {
  const logData = {
    message: msg,
    level,
    timestamp: new Date(),
  };
  const all = {
    ...(details ?? {}),
    ...logData,
  };
  defaultLogHandler(emitter, level, msg, all);
  if (
    EnvironmentStore.get().isDevelopment &&
    level === "error" &&
    details?.error
  ) {
    // eslint-disable-next-line no-console
    console.error(details.error);
  }
};
setLogHandler(logHandler);

// eslint-disable-next-line @faire/no-re-exports
export default Levels;

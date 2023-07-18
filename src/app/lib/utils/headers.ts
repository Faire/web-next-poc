import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

export const getHeadersList = (headers: ReadonlyHeaders) =>
  Array.from(headers.entries()).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );

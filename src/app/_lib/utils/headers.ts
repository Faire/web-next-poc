import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

export const FAIRE_ACCESS_HEADER = {
  "x-faire-deco-access-token": process.env.FAIRE_ACCESS_TOKEN || "",
  "X-If-Setting": '{"BLOCK_STAGING_ACCESS":"false"}',
};

export const getHeadersList = (headers: ReadonlyHeaders) =>
  Array.from(headers.entries()).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );

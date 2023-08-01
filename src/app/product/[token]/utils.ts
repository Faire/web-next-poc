import { headers } from "next/headers";

import { FAIRE_ACCESS_HEADER, getHeadersList } from "@/app/_lib/utils/headers";

export const fetchProductDetails = async (token: string) => {
  const headersList = getHeadersList(headers());
  try {
    const response = await fetch(
      `https://faire-stage.com/api/v2/product/${token}`,
      {
        headers: {
          ...headersList,
          "content-type": "application/json",
          ...FAIRE_ACCESS_HEADER,
        },
        referrer: headers().get("referer") ?? undefined,
      }
    );
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

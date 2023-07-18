import { headers } from "next/headers";

import { getHeadersList } from "@/utils/headers";

export const fetchProductDetails = async (token: string) => {
  const headersList = getHeadersList(headers());
  try {
    const response = await fetch(
      `https://faire-stage.com/api/v2/product/${token}`,
      {
        headers: { ...headersList, "content-type": "application/json" },
        referrer: headers().get("referer") ?? undefined,
      }
    );
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

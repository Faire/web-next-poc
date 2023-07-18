import { headers } from "next/headers";

import { getHeadersList } from "@/app/lib/utils/headers";

export const PAGE_SIZE = 60;

export const searchProducts = async (q: string): Promise<any | null> => {
  const headersList = getHeadersList(headers());
  try {
    const response = await fetch(
      "https://faire-stage.com/api/v2/search/products",
      {
        method: "POST",
        body: JSON.stringify({
          query: q,
          page_number: 0,
          page_size: PAGE_SIZE,
        }),
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

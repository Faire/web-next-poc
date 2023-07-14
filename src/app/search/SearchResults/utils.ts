import { headers } from "next/headers";

export const PAGE_SIZE = 60;

export const searchProducts = async (q: string): Promise<any | null> => {
  const headersList = Array.from(headers().entries()).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
  try {
    const response = await fetch(
      "http://localhost:4000/api/v2/search/products",
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
    return null;
  }
};

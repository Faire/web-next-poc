import { headers } from "next/headers";

export const fetchProductDetails = async (token: string) => {
  const headersList = Array.from(headers().entries()).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
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

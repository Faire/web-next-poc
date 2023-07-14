import { headers } from "next/headers";

export const fetchSearchSuggestions = async (query: string) => {
  try {
    const response = await fetch(
      `https://faire-stage.com/api/v2/search/suggestions`,
      {
        method: "POST",
        body: JSON.stringify({
          query,
        }),
        headers: { "content-type": "application/json" },
      }
    );
    return await response.json();
  } catch (error) {
    return null;
  }
};

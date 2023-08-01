export const fetchSearchSuggestions = async (query: string) => {
  try {
    const response = await fetch(
      `http://localhost:4000/api/v2/search/suggestions`,
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
    console.error(error);
    return null;
  }
};

"use client";

import { useSearchParams } from "next/navigation";

const Search: React.FC = () => {
  const search = useSearchParams();
  return <div>{search?.get("q")}</div>;
};

export default Search;

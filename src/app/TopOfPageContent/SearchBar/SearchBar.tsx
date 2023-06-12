"use client";

import fetchSearchSuggestions, {
  route as searchSuggestionsRoute,
} from "@faire/web-api/api/v2/search/suggestions/post";
import { ISearchSuggestionRequest } from "@faire/web-api/indigofair/data/ISearchSuggestionRequest";
import { useStateWithDebounce } from "@faire/web/ui/hooks/useStateWithDebounce";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { cn } from "@/ui/cn";
import { FONT_CLASSNAMES } from "@/ui/slate/Typography/fonts";
import * as TYPOGRAPHY_STYLES from "@/ui/slate/Typography/styles.css";

import * as styles from "./styles.css";
import { Suggestions } from "./Suggestions/Suggestions";

const INPUT_VARIANT = "paragraphSansRegular";

export const SearchBar: React.FC = () => {
  const pathname = usePathname();
  const [isFocused, setIsFocused] = useState(false);
  const { value, setValue, debouncedValue } = useStateWithDebounce("", 200);

  const { data: suggestions } = useQuery(
    [searchSuggestionsRoute, debouncedValue],
    () =>
      fetchSearchSuggestions(
        ISearchSuggestionRequest.build({
          query: debouncedValue,
        })
      ),
    { enabled: debouncedValue.length > 0, keepPreviousData: true }
  );

  useEffect(() => {
    if (pathname !== "/search") {
      setValue("");
    }
  }, [pathname, setValue]);

  const onFocus = () => setIsFocused(true);
  const onBlur = () => setTimeout(() => setIsFocused(false), 100);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          className={cn(
            TYPOGRAPHY_STYLES[INPUT_VARIANT],
            FONT_CLASSNAMES[INPUT_VARIANT],
            styles.input
          )}
          type="search"
          placeholder="Search products or brands"
          {...{ value, onChange, onFocus, onBlur }}
        />
      </div>
      {suggestions && isFocused && value ? (
        <Suggestions {...{ suggestions }} />
      ) : null}
    </div>
  );
};

"use client";

import type { ISearchSuggestionResponse } from "@faire/web-api/indigofair/data/ISearchSuggestionResponse";
import Image from "next/image";
import Link from "next/link";

import { Spacer } from "@/ui/slate/Spacer";
import { Typography } from "@/ui/slate/Typography";

import Search from "./Search.svg";
import * as styles from "./styles.css";

const SEARCH_ICON_SIZE = 16;

type Props = {
  suggestions: ISearchSuggestionResponse;
};

export const Suggestions: React.FC<Props> = ({
  suggestions: { suggested_search_queries_display_order },
}) => {
  const uniqueSuggestions = formatSuggestions(
    suggested_search_queries_display_order
  );

  return uniqueSuggestions.length > 0 ? (
    <div className={styles.container}>
      {uniqueSuggestions.map((query, index) => (
        <Link
          key={index}
          href={{
            pathname: "/search",
            search: `?q=${query}`,
          }}
          className={styles.suggestion}
        >
          <Image
            className={styles.icon}
            src={Search}
            alt="Search icon"
            width={SEARCH_ICON_SIZE}
            height={SEARCH_ICON_SIZE}
          />
          <Spacer width="8px" />
          <Typography>{query}</Typography>
        </Link>
      ))}
    </div>
  ) : null;
};

const formatSuggestions = <T,>(values: T[]): T[] => {
  const set = new Set(values);
  return Array.from(set).slice(0, 5);
};

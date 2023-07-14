"use client";

import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

import { Spacer } from "@/ui/slate/Spacer";
import { Typography } from "@/ui/slate/Typography";

import Search from "./Search.svg";

const SEARCH_ICON_SIZE = 16;

type Props = {
  suggestions: any;
};

export const Suggestions: React.FC<Props> = ({
  suggestions: { suggested_search_queries_display_order },
}) => {
  const uniqueSuggestions = formatSuggestions(
    suggested_search_queries_display_order
  );

  return uniqueSuggestions.length > 0 ? (
    <Container>
      {uniqueSuggestions.map((query, index) => (
        <Suggestion
          key={index}
          href={{
            pathname: "/search",
            search: `?q=${query}`,
          }}
        >
          <Icon
            src={Search}
            alt="Search icon"
            width={SEARCH_ICON_SIZE}
            height={SEARCH_ICON_SIZE}
          />
          <Spacer width="8px" />
          <Typography>{query as string}</Typography>
        </Suggestion>
      ))}
    </Container>
  ) : null;
};

const formatSuggestions = <T,>(values: T[]): T[] => {
  const set = new Set(values);
  return Array.from(set).slice(0, 5);
};

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 40px;
  background-color: white;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 7px 10px;
`;

const Suggestion = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  text-decoration: none;
  &:hover {
    background-color: "#F7F7F7;
  }
`;

const Icon = styled(Image)`
  padding: 8px;
  border-radius: 50%;
  background-color: "#F7F7F7;
`;

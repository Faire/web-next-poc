"use client";

import { useQuery } from "@tanstack/react-query";
import cn from "classnames";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { FONT_CLASSNAMES } from "@/ui/slate/Typography/fonts";
import * as TYPOGRAPHY_STYLES from "@/ui/slate/Typography/styles.css";
import { useStateWithDebounce } from "@/utils/useStateWithDebounce";

import { Suggestions } from "./Suggestions/Suggestions";
import { fetchSearchSuggestions } from "./utils";

const INPUT_VARIANT = "paragraphSansRegular";

export const SearchBar: React.FC = () => {
  const pathname = usePathname();
  const [isFocused, setIsFocused] = useState(false);
  const { value, setValue, debouncedValue } = useStateWithDebounce("", 200);

  const { data: suggestions } = useQuery(
    ["api/v2/search/suggestions/post", debouncedValue],
    () => fetchSearchSuggestions(debouncedValue),
    { enabled: debouncedValue.length > 0, keepPreviousData: true }
  );

  useEffect(() => {
    if (pathname !== "/search") {
      setValue("");
    }
  }, [pathname, setValue]);

  const onFocus = () => setIsFocused(true);
  const onBlur = () => setTimeout(() => setIsFocused(false), 120);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  return (
    <Container>
      <InputContainer>
        <Input
          className={cn(
            TYPOGRAPHY_STYLES[INPUT_VARIANT],
            FONT_CLASSNAMES[INPUT_VARIANT]
          )}
          type="search"
          placeholder="Search products or brands"
          {...{ value, onChange, onFocus, onBlur }}
        />
      </InputContainer>
      {suggestions && isFocused && value ? (
        <Suggestions {...{ suggestions }} />
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  position: relative;
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 1px 16px;
  border-radius: 20px;
  box-sizing: border-box;
  border: 1px solid #757575;
`;

const Input = styled.input`
  width: 100%;
  height: 36px;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  ::placeholder {
    color: #757575;
  }
`;

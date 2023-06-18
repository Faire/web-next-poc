import { style } from "@vanilla-extract/css";

import * as a from "@/ui/Atoms/Atoms";
import { cn } from "@/ui/cn";

export const NUMBER_OF_COLUMNS = 5;

export const container = cn(
  a.width("100%"),
  a.paddingY("32px"),
  a.paddingX("48px"),
  style({
    margin: "auto",
    maxWidth: 1400,
  })
);

export const grid = style({
  display: "grid",
  gridTemplateColumns: `repeat(${NUMBER_OF_COLUMNS}, 1fr)`,
  gridGap: 16,
});

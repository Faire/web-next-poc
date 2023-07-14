import { style } from "@vanilla-extract/css";

export const NUMBER_OF_COLUMNS = 5;

export const container = style({
  width: "100%",
  padding: "32px 48px",
  margin: "auto",
  maxWidth: 1400,
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: `repeat(${NUMBER_OF_COLUMNS}, 1fr)`,
  gridGap: 16,
});

import { style } from "@vanilla-extract/css";

export const NUMBER_OF_COLUMNS = 4;

export const container = style({
  width: "100%",
  padding: "0px 48px 32px",
  margin: "auto",
  maxWidth: 1232,
});

export const grid = style({
  width: "100%",
  display: "grid",
  gridTemplateColumns: `repeat(${NUMBER_OF_COLUMNS}, 1fr)`,
  gridGap: 16,
});

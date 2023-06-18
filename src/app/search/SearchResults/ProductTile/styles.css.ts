import { Action } from "@faire/design-tokens";
import { style } from "@vanilla-extract/css";

const BORDER = `1px solid ${Action.border.muted}`;

export const container = style({
  border: BORDER,
});

export const productDetailsContainer = style({
  width: "100%",
  boxSizing: "border-box",
  padding: 16,
  textDecoration: "none",
  borderTop: BORDER,
  borderBottom: BORDER,
});

export const productNameWrapper = style({
  minHeight: 40,
});

export const brandNameContainer = style({
  width: "100%",
  boxSizing: "border-box",
  padding: 16,
});

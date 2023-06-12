import { Action } from "@faire/design-tokens";
import { style } from "@vanilla-extract/css";

import { cn } from "@/ui/cn";
import { PrimaryButton } from "@/ui/slate/Button.css";

const Z_INDEX = 12;

export const container = style({
  position: "sticky",
  top: 0,
  zIndex: Z_INDEX,
  transition: "transform 200ms linear",
});

export const header = style({
  position: "relative",
  zIndex: Z_INDEX,
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  flex: "0 0 auto",
  width: "100%",
  padding: "8px 24px",
  boxSizing: "border-box",
  backgroundColor: Action.surface.muted,
  borderBottom: `1px solid ${Action.border.muted}`,
  transition: "background 0.1s linear",
});

export const content = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});

export const linkContainer = style({
  display: "flex",
  alignItems: "center",
  minWidth: 407,
});

export const verticalLine = style({
  width: 1,
  height: 24,
  backgroundColor: Action.border.muted,
  flexShrink: 0,
  margin: "0 16px",
});

export const link = style({
  textDecoration: "none",
});

export const signUpButton = cn(
  PrimaryButton,
  link,
  style({
    height: 36,
  })
);
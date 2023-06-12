import { Action } from "@faire/design-tokens";
import { style } from "@vanilla-extract/css";

import * as a from "@/ui/Atoms/Atoms";
import { cn } from "@/ui/cn";

export const container = cn(a.width("100%"), a.position("relative"));

export const inputContainer = cn(
  a.width("100%"),
  a.paddingX("16px"),
  a.paddingY("1px"),
  style({
    borderRadius: "20px",
    boxSizing: "border-box",
    border: `1px solid ${Action.border.subdued}`,
  })
);

export const input = cn(
  a.width("100%"),
  style({
    height: 36,
    margin: 0,
    padding: 0,
    border: "none",
    outline: "none",
    "::placeholder": {
      color: Action.text.subdued,
    },
  })
);

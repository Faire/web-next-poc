import { Core } from "@faire/design-tokens";
import { style } from "@vanilla-extract/css";

import * as a from "@/ui/Atoms/Atoms";
import { cn } from "@/ui/cn";

export const container = cn(
  a.width("100%"),
  a.position("absolute"),
  a.top("40px"),
  a.backgroundColor("white"),
  style({
    overflowY: "auto",
    overflowX: "hidden",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 7px 10px",
  })
);

export const suggestion = cn(
  a.display("flex"),
  a.alignItems("center"),
  a.paddingX("16px"),
  a.paddingY("8px"),
  style({
    textDecoration: "none",
    ":hover": {
      backgroundColor: Core.background.tertiary,
    },
  })
);

export const icon = cn(
  a.padding("8px"),
  a.borderRadius("50%"),
  a.backgroundColor("paper")
);

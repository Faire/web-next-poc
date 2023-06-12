import { defineProperties } from "@vanilla-extract/sprinkles";

import { ALLOWED_SPACING } from "../consts/allowedSpacing";
import { responsiveConditions } from "../consts/responsiveConditions";

import { Spacing } from "./spacingProperties.css";

export const flexProperties = defineProperties({
  ...responsiveConditions,
  properties: {
    display: ["none", "block", "inline", "inline-block", "flex", "inline-flex"],
    flexDirection: ["row", "row-reverse", "column", "column-reverse"],
    flexWrap: ["nowrap", "wrap", "wrap-reverse"],
    alignItems: ["flex-start", "flex-end", "center", "baseline", "stretch"],
    justifyContent: [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
    ],
    flexGrow: [0, 1] as const,
    flexShrink: [0, 1] as const,
    flexBasis: ["auto", "content", 0],
    gap: ALLOWED_SPACING,
  },
});

type Flex = {
  [key in keyof typeof flexProperties.styles]: keyof (typeof flexProperties.styles)[key]["values"];
};

export type Display = Flex["display"];
export type FlexDirection = Flex["flexDirection"];
export type FlexWrap = Flex["flexWrap"];
export type AlignItems = Flex["alignItems"];
export type JustifyContent = Flex["justifyContent"];
export type FlexGrow = Flex["flexGrow"];
export type FlexShrink = Flex["flexShrink"];
export type FlexBasis = Flex["flexBasis"];
export type Gap = Spacing;

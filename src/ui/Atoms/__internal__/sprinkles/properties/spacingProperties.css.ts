import { defineProperties } from "@vanilla-extract/sprinkles";

import { ALLOWED_SPACING, ALLOWED_MARGINS } from "../consts/allowedSpacing";
import { responsiveConditions } from "../consts/responsiveConditions";

export type Spacing = (typeof ALLOWED_SPACING)[number];
export type Margin = (typeof ALLOWED_MARGINS)[number];

export const spacingProperties = defineProperties({
  ...responsiveConditions,
  properties: {
    paddingTop: ALLOWED_SPACING,
    paddingBottom: ALLOWED_SPACING,
    paddingLeft: ALLOWED_SPACING,
    paddingRight: ALLOWED_SPACING,
    paddingBlockStart: ALLOWED_SPACING,
    paddingBlockEnd: ALLOWED_SPACING,
    paddingInlineStart: ALLOWED_SPACING,
    paddingInlineEnd: ALLOWED_SPACING,
    marginTop: ALLOWED_MARGINS,
    marginBottom: ALLOWED_MARGINS,
    marginLeft: ALLOWED_MARGINS,
    marginRight: ALLOWED_MARGINS,
    marginBlockStart: ALLOWED_MARGINS,
    marginBlockEnd: ALLOWED_MARGINS,
    marginInlineStart: ALLOWED_MARGINS,
    marginInlineEnd: ALLOWED_MARGINS,
    left: ALLOWED_SPACING,
    right: ALLOWED_SPACING,
    top: ALLOWED_SPACING,
    bottom: ALLOWED_SPACING,
  },
  shorthands: {
    padding: [
      "paddingBlockStart",
      "paddingBlockEnd",
      "paddingInlineStart",
      "paddingInlineEnd",
    ],
    paddingX: ["paddingInlineStart", "paddingInlineEnd"],
    paddingY: ["paddingBlockStart", "paddingBlockEnd"],
    margin: [
      "marginBlockStart",
      "marginBlockEnd",
      "marginInlineStart",
      "marginInlineEnd",
    ],
    marginX: ["marginInlineStart", "marginInlineEnd"],
    marginY: ["marginBlockStart", "marginBlockEnd"],
  },
});

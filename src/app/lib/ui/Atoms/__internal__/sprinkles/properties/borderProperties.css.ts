import { defineProperties } from "@vanilla-extract/sprinkles";

const borderStyle = [
  "solid",
  "dashed",
  "dotted",
  "double",
  "groove",
  "ridge",
  "inset",
  "outset",
  "none",
  "hidden",
] as const;
const borderWidth = ["0px", "1px", "2px", "4px"] as const;

export const borderProperties = defineProperties({
  properties: {
    borderStyle,
    borderWidth,
    borderBlockWidth: borderWidth,
    borderInlineWidth: borderWidth,
    borderBlockStartWidth: borderWidth,
    borderBlockEndWidth: borderWidth,
    borderInlineStartWidth: borderWidth,
    borderInlineEndWidth: borderWidth,
    borderBlockStyle: borderStyle,
    borderInlineStyle: borderStyle,
    borderBlockStartStyle: borderStyle,
    borderBlockEndStyle: borderStyle,
    borderInlineStartStyle: borderStyle,
    borderInlineEndStyle: borderStyle,
  },
});

type Border = {
  [key in keyof typeof borderProperties.styles]: keyof (typeof borderProperties.styles)[key]["values"];
};

export type BorderStyle = Border["borderStyle"];
export type BorderWidth = Border["borderWidth"];

import { styleVariants, StyleRule } from "@vanilla-extract/css";
import { defineProperties } from "@vanilla-extract/sprinkles";

import { responsiveConditions } from "../consts/responsiveConditions";

export const responsiveTextProperties = defineProperties({
  ...responsiveConditions,
  properties: {
    textAlign: ["center", "left", "right"] as const,
  },
} as const);

export const textProperties = defineProperties({
  properties: {
    overflowWrap: ["normal", "break-word", "anywhere"],
    textDecoration: ["none", "underline", "line-through"],
    lineClamp: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    wordBreak: ["normal", "break-all", "break-word", "keep-all"],
  },
} as const);

export type TextAlign =
  keyof typeof responsiveTextProperties.styles.textAlign.values;
export type OverflowWrap =
  keyof typeof textProperties.styles.overflowWrap.values;

const baseStyles: StyleRule = {
  WebkitBoxOrient: "vertical",
  display: "-webkit-box",
  overflow: "hidden",
  wordBreak: "break-word",
};
const lineClamps = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
} as const;
export type LineClamp = keyof typeof lineClamp;
export const lineClamp = styleVariants(lineClamps, (lineClampVal: number) => ({
  ...baseStyles,
  WebkitLineClamp: lineClampVal,
}));
export type TextDecoration =
  keyof typeof textProperties.styles.textDecoration.values;
export type WordBreak = keyof typeof textProperties.styles.wordBreak.values;

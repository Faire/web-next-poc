import { defineProperties } from "@vanilla-extract/sprinkles";

import { responsiveConditions } from "../consts/responsiveConditions";

export const sans = "Graphik, Helvetica, sans-serif";
export const serif = "Nantes, Georgia, serif";
const fontFamily = [sans, serif] as const;
export type FontFamily = (typeof fontFamily)[number];

const fontWeight = ["200", "400", "500", "700"] as const;
export type FontWeight = (typeof fontWeight)[number];

const lineHeight = [
  "86px",
  "64px",
  "50px",
  "38px",
  "32px",
  "26px",
  "20px",
  "16px",
] as const;
export type LineHeight = (typeof lineHeight)[number];

const fontSize = [
  "72px",
  "52px",
  "38px",
  "30px",
  "22px",
  "18px",
  "14px",
  "12px",
] as const;
export type FontSize = (typeof fontSize)[number];

const letterSpacing = ["0", "0.15px"] as const;
export type LetterSpacing = (typeof letterSpacing)[number];

const overflow = [
  "visible",
  "hidden",
  "clip",
  "scroll",
  "auto",
  "unset",
] as const;
export type Overflow = (typeof overflow)[number];

const whiteSpace = ["normal", "nowrap", "pre", "pre-line", "pre-wrap"] as const;
export type WhiteSpace = (typeof whiteSpace)[number];

const textOverflow = ["clip", "ellipsis"] as const;
export type TextOverflow = (typeof textOverflow)[number];

export const fontProperties = defineProperties({
  ...responsiveConditions,
  properties: {
    fontFamily,
    fontWeight,
    lineHeight,
    fontSize,
    letterSpacing,
    overflow,
    whiteSpace,
    textOverflow,
  },
});

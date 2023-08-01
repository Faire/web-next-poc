import { defineProperties } from "@vanilla-extract/sprinkles";

export const svgProperties = defineProperties({
  properties: {
    strokeLinecap: ["butt", "round", "square"],
  },
});

type Animation = {
  [key in keyof typeof svgProperties.styles]: keyof (typeof svgProperties.styles)[key]["values"];
};

export type StrokeLinecap = Animation["strokeLinecap"];

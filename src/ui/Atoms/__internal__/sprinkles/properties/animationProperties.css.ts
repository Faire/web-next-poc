import { defineProperties } from "@vanilla-extract/sprinkles";

export const animationProperties = defineProperties({
  properties: {
    animationDuration: ["0", "0.5s", "1s", "1.5s", "2s", "2.5s", "3s"],
    animationTimingFunction: [
      "linear",
      "ease",
      "ease-in",
      "ease-out",
      "ease-in-out",
    ],
    animationDelay: ["0", "0.5s", "1s", "1.5s", "2s", "2.5s", "3s"],
    animationIterationCount: ["infinite"],
  },
});

type Animation = {
  [key in keyof typeof animationProperties.styles]: keyof (typeof animationProperties.styles)[key]["values"];
};

export type AnimationDuration = Animation["animationDuration"];
export type AnimationTimingFunction = Animation["animationTimingFunction"];
export type AnimationDelay = Animation["animationDelay"];
export type AnimationIterationCount = Animation["animationIterationCount"];

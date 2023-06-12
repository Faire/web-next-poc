import { defineProperties } from "@vanilla-extract/sprinkles";

export const transitionProperties = defineProperties({
  properties: {
    transitionProperty: [
      "opacity",
      "width",
      "transform",
      "background-color",
      "all",
    ],
    transitionDuration: ["0", "0.5s", "1s", "1.5s", "2s", "2.5s", "3s"],
    transitionTimingFunction: [
      "linear",
      "ease",
      "ease-in",
      "ease-out",
      "ease-in-out",
    ],
    transitionDelay: ["0", "0.5s", "1s", "1.5s", "2s", "2.5s", "3s"],
  },
});

type Transition = {
  [key in keyof typeof transitionProperties.styles]: keyof (typeof transitionProperties.styles)[key]["values"];
};

export type TransitionProperty = Transition["transitionProperty"];
export type TransitionDuration = Transition["transitionDuration"];
export type TransitionTimingFunction = Transition["transitionTimingFunction"];
export type TransitionDelay = Transition["transitionDelay"];

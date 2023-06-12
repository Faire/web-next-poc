import { defineProperties } from "@vanilla-extract/sprinkles";

export const imageProperties = defineProperties({
  properties: {
    objectFit: ["contain", "cover", "fill", "none", "scale-down"],
    objectPosition: ["top", "bottom", "left", "right", "center"],
    backgroundPosition: ["center", "left", "right", "top", "bottom"],
    backgroundSize: ["cover", "contain"],
  },
});

type Image = {
  [key in keyof typeof imageProperties.styles]: keyof (typeof imageProperties.styles)[key]["values"];
};

export type ObjectFit = Image["objectFit"];
export type ObjectPosition = Image["objectPosition"];
export type BackgroundPosition = Image["backgroundPosition"];
export type BackgroundSize = Image["backgroundSize"];

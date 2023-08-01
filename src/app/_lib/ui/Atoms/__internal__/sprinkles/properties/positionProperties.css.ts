import { defineProperties } from "@vanilla-extract/sprinkles";

export const positionProperties = defineProperties({
  properties: {
    position: ["static", "relative", "absolute", "fixed", "sticky"],
  },
});

export type Position = keyof typeof positionProperties.styles.position.values;

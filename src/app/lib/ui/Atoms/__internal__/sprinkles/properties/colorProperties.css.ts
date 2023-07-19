import { defineProperties } from "@vanilla-extract/sprinkles";

export const opacityProperties = defineProperties({
  properties: {
    opacity: [0, 0.5, 1] as const,
  },
});

export type Opacity = keyof typeof opacityProperties.styles.opacity.values;

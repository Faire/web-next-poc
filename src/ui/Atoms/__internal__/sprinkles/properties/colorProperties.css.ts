import { Color as slateColor } from "@faire/web/slate/Color";
import { styleVariants } from "@vanilla-extract/css";
import { defineProperties } from "@vanilla-extract/sprinkles";

export const opacityProperties = defineProperties({
  properties: {
    opacity: [0, 0.5, 1] as const,
  },
});

export const color = styleVariants(slateColor, (color) => ({ color }));
export const backgroundColor = styleVariants(slateColor, (color) => ({
  backgroundColor: color,
}));
export const borderColor = styleVariants(slateColor, (color) => ({
  borderColor: color,
}));
export const borderBlockColor = styleVariants(slateColor, (color) => ({
  borderBlockColor: color,
}));
export const borderInlineColor = styleVariants(slateColor, (color) => ({
  borderInlineColor: color,
}));
export const borderBlockStartColor = styleVariants(slateColor, (color) => ({
  borderBlockStartColor: color,
}));
export const borderBlockEndColor = styleVariants(slateColor, (color) => ({
  borderBlockEndColor: color,
}));
export const borderInlineStartColor = styleVariants(slateColor, (color) => ({
  borderInlineStartColor: color,
}));
export const borderInlineEndColor = styleVariants(slateColor, (color) => ({
  borderInlineEndColor: color,
}));

export type Opacity = keyof typeof opacityProperties.styles.opacity.values;

export type Color = keyof typeof color;

import { Action } from "@faire/design-tokens";
import { style, keyframes } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
});

const passBy = keyframes({
  "0%": {
    transform: "translateX(-100%)",
  },
  "100%": {
    transform: "translateX(100%)",
  },
});

export const animatedBackground = style({
  position: "absolute",
  background:
    "linear-gradient(90deg, rgba(234, 234, 234, 0) 0%, #eaeaea 67.71%, rgba(234, 234, 234, 0) 100%)",
  animation: `${passBy} 1.8s ease-in-out infinite`,
  animationTimingFunction: "cubic-bezier(0.7, -0.4, 0.4, 1.4)",
});

export const staticBackground = style({
  position: "relative",
  overflow: "hidden",
  backgroundColor: Action.surface.subdued,
});

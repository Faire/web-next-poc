import { style, keyframes } from "@vanilla-extract/css";

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

const dash = keyframes({
  "0%": {
    strokeDasharray: "1, 200",
    strokeDashoffset: "0",
  },
  "50%": {
    strokeDasharray: "89, 200",
    strokeDashoffset: "-35px",
  },
  "100%": {
    strokeDasharray: "89, 200",
    strokeDashoffset: "-124px",
  },
});

export const animationNames = {
  rotate: style({ animationName: rotate }),
  dash: style({ animationName: dash }),
};

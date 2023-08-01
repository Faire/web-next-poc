import { style } from "@vanilla-extract/css";
import cn from "classnames";

import { PrimaryButton, TertiaryButton } from "@/app/_lib/ui/slate/Button.css";

export const container = style({
  marginLeft: 56,
  maxWidth: 294,
});

const BUTTON_WIDTH = 228;

export const signUpButton = cn(
  PrimaryButton,
  style({ minWidth: BUTTON_WIDTH })
);

export const hr = style({
  width: BUTTON_WIDTH,
  height: 1,
  backgroundColor: "#E5E5E5",
  margin: 0,
  border: 0,
});

export const readTheirStoryButton = cn(
  TertiaryButton,
  style({
    cursor: "pointer",
    background: "none",
    border: "none",
    margin: 0,
    padding: 0,
  })
);

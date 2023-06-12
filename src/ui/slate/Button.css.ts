import { Core, Action } from "@faire/design-tokens";
import Color from "@faire/web/slate/Color";
import { style } from "@vanilla-extract/css";

export const BasicButton = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "auto",
  cursor: "pointer",
  position: "relative",
  padding: "0 27px", // 28px padding - 1px border
  height: "48px",
  border: `1px solid ${Action.border.default}`,
  fontWeight: 200,
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "0.15px",
  ":hover": {
    color: `${Core.text.primaryInverse}`,
    backgroundColor: `${Color.richBlack}`,
    borderColor: `${Color.richBlack}`,
  },
});

export const PrimaryButton = style([
  BasicButton,
  {
    backgroundColor: Action.surface.default,
    color: Core.text.primaryInverse,
    ":disabled": {
      backgroundColor: Action.surface.disabled,
      borderColor: Action.border.muted,
    },
  },
]);

export const SecondaryButton = style([
  BasicButton,
  {
    backgroundColor: Action.surface.muted,
    color: Core.text.primary,
    ":disabled": {
      backgroundColor: Action.surface.muted,
      borderColor: Action.border.subdued,
    },
  },
]);

export const TertiaryButton = style({
  display: "inline-flex",
  backgroundColor: "transparent",
  textDecoration: "underline",
  textDecorationColor: Core.text.primary,
  ":hover": {
    color: "#5262C7",
    textDecorationColor: "#5262C7",
  },
});

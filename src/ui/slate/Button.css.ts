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
  border: "1px solid #333333",
  fontWeight: 200,
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "0.15px",
  ":hover": {
    color: "white",
    backgroundColor: "#000000",
    borderColor: "#000000",
  },
});

export const PrimaryButton = style([
  BasicButton,
  {
    backgroundColor: "#333333",
    color: "white",
    ":disabled": {
      backgroundColor: "#757575",
      borderColor: "#DFE0E1",
    },
  },
]);

export const SecondaryButton = style([
  BasicButton,
  {
    backgroundColor: "white",
    color: "#333333",
    ":disabled": {
      backgroundColor: "white",
      borderColor: "#757575",
    },
  },
]);

export const TertiaryButton = style({
  display: "inline-flex",
  backgroundColor: "transparent",
  textDecoration: "underline",
  textDecorationColor: "#333333",
  ":hover": {
    color: "#5262C7",
    textDecorationColor: "#5262C7",
  },
});

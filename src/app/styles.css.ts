import { style } from "@vanilla-extract/css";
import cn from "classnames";

import { SecondaryButton } from "@/app/lib/ui/slate/Button.css";

export const body = style({ margin: 0, padding: 0 });

const HERO_HEIGHT = 600;

export const hero = {
  container: style({
    position: "relative",
    width: "100%",
    height: HERO_HEIGHT,
  }),
  image: style({
    position: "absolute",
    top: 0,
    left: 0,
    objectFit: "cover",
    objectPosition: "center",
    height: HERO_HEIGHT,
  }),
  overlay: style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: HERO_HEIGHT,
    zIndex: 1,
    backgroundColor: "rgba(85, 77, 69, 0.25)",
  }),
  button: cn(
    SecondaryButton,
    style({
      minWidth: 228,
      boxSizing: "border-box",
      border: "none",
      textDecoration: "none",
      ":hover": {
        backgroundColor: "white",
      },
    })
  ),
};

export const values = {
  container: style({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#FBF8F6",
    height: 424,
  }),
  item: style({
    marginTop: 120,
    width: 320,
  }),
};

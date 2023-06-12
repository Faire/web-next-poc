import { style } from "@vanilla-extract/css";

import * as a from "@/ui/Atoms/Atoms";
import { cn } from "@/ui/cn";
import { SecondaryButton } from "@/ui/slate/Button.css";

export const body = style({ margin: 0, padding: 0 });

const HERO_HEIGHT = 600;

export const hero = {
  container: cn(
    a.position("relative"),
    a.width("100%"),
    style({
      height: HERO_HEIGHT,
    })
  ),
  image: cn(
    a.position("absolute"),
    a.top("0px"),
    a.left("0px"),
    a.objectFit("cover"),
    a.objectPosition("center"),
    style({
      height: HERO_HEIGHT,
    })
  ),
  overlay: cn(
    a.display("flex"),
    a.flexDirection("column"),
    a.justifyContent("center"),
    a.alignItems("center"),
    a.position("absolute"),
    a.top("0px"),
    a.left("0px"),
    a.width("100%"),
    style({
      height: HERO_HEIGHT,
      zIndex: 1,
      backgroundColor: "rgba(85, 77, 69, 0.25)",
    })
  ),
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
  container: cn(
    a.display("flex"),
    a.justifyContent("center"),
    a.width("100%"),
    a.backgroundColor("ivory"),
    style({
      height: 424,
    })
  ),
  item: cn(
    style({
      marginTop: 120,
      width: 320,
    })
  ),
};

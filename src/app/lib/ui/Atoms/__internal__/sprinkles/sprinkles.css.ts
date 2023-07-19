import { createSprinkles } from "@vanilla-extract/sprinkles";

import { animationProperties } from "./properties/animationProperties.css";
import { borderProperties } from "./properties/borderProperties.css";
import { opacityProperties } from "./properties/colorProperties.css";
import { cursorProperties } from "./properties/cursorProperties.css";
import { flexProperties } from "./properties/flexProperties.css";
import { fontProperties } from "./properties/fontProperties.css";
import { imageProperties } from "./properties/imageProperties.css";
import { positionProperties } from "./properties/positionProperties.css";
import {
  responsiveSizeProperties,
  sizeProperties,
} from "./properties/sizeProperties.css";
import { spacingProperties } from "./properties/spacingProperties.css";
import { svgProperties } from "./properties/svgProperties.css";
import {
  textProperties,
  responsiveTextProperties,
} from "./properties/textProperties.css";
import { transitionProperties } from "./properties/transitionProperties.css";

export const sprinkles = createSprinkles(
  spacingProperties,
  textProperties,
  responsiveTextProperties,
  fontProperties,
  flexProperties,
  sizeProperties,
  responsiveSizeProperties,
  imageProperties,
  positionProperties,
  animationProperties,
  transitionProperties,
  svgProperties,
  borderProperties,
  cursorProperties,
  opacityProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];

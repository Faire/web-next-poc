import { defineProperties } from "@vanilla-extract/sprinkles";

import {
  ALLOWED_BORDER_RADIUS_VALUES,
  ALLOWED_SIZE_VALUES,
} from "../consts/allowedSpacing";
import { responsiveConditions } from "../consts/responsiveConditions";

export type Size = (typeof ALLOWED_SIZE_VALUES)[number];

export const responsiveSizeProperties = defineProperties({
  ...responsiveConditions,
  properties: {
    width: ALLOWED_SIZE_VALUES,
    height: ALLOWED_SIZE_VALUES,
    blockSize: ALLOWED_SIZE_VALUES,
    inlineSize: ALLOWED_SIZE_VALUES,
    minWidth: ALLOWED_SIZE_VALUES,
    minHeight: ALLOWED_SIZE_VALUES,
    minBlockSize: ALLOWED_SIZE_VALUES,
    minInlineSize: ALLOWED_SIZE_VALUES,
    maxWidth: ALLOWED_SIZE_VALUES,
    maxHeight: ALLOWED_SIZE_VALUES,
    maxBlockSize: ALLOWED_SIZE_VALUES,
    maxInlineSize: ALLOWED_SIZE_VALUES,
  },
});

export const sizeProperties = defineProperties({
  properties: {
    borderRadius: ALLOWED_BORDER_RADIUS_VALUES,
  },
});

export type BorderRadius =
  keyof typeof sizeProperties.styles.borderRadius.values;

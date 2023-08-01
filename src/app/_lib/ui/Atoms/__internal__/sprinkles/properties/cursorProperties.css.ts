import { defineProperties } from "@vanilla-extract/sprinkles";

export const cursorProperties = defineProperties({
  properties: {
    cursor: [
      "pointer",
      "default",
      "hand",
      "inherit",
      "not-allowed",
      "unset",
      "progress",
    ],
  },
});

export type Cursor = keyof typeof cursorProperties.styles.cursor.values;

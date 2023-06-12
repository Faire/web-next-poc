import { IViewportSpecifiable } from "../../__internal__/IViewportSpecifiable";

import { sprinkles, Sprinkles } from "./sprinkles/sprinkles.css";

// TODO: exclude viewport fields (like mobile, tablet, etc) from Sprinkles[Sprinkle]
export const createViewportSpecifiable =
  <Sprinkle extends keyof Sprinkles>(sprinkle: Sprinkle) =>
  (value: Sprinkles[Sprinkle]): IViewportSpecifiable => ({
    mobileAndAbove: sprinkles({ [sprinkle]: value }),
    mobile: sprinkles({ [sprinkle]: { mobile: value } }),
    tablet: sprinkles({ [sprinkle]: { tablet: value } }),
    tabletAndAbove: sprinkles({ [sprinkle]: { tabletAndAbove: value } }),
    tabletAndBelow: sprinkles({ [sprinkle]: { tabletAndBelow: value } }),
    desktopAndAbove: sprinkles({ [sprinkle]: { desktopAndAbove: value } }),
    xlarge: sprinkles({ [sprinkle]: { xlarge: value } }),
  });

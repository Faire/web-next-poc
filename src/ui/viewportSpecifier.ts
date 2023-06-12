import { StyleRule } from "@vanilla-extract/css";

import { IViewportSpecifiable } from "./__internal__/IViewportSpecifiable";
import { viewportUnwrapperUtil } from "./__internal__/viewportUnwrapperUtil";
import { breakpoints, BreakpointValues } from "./breakpoints";

/* eslint-disable @faire/ban-top-level-request-specific-data */
export const mobile = viewportUnwrapperUtil("mobile");
export const mobileAndAbove = viewportUnwrapperUtil("mobileAndAbove");
export const tablet = viewportUnwrapperUtil("tablet");
export const tabletAndAbove = viewportUnwrapperUtil("tabletAndAbove");
export const tabletAndBelow = viewportUnwrapperUtil("tabletAndBelow");
export const desktopAndAbove = viewportUnwrapperUtil("desktopAndAbove");
export const xlarge = viewportUnwrapperUtil("xlarge");

// eslint-disable @typescript-eslint/no-explicit-any
export const customClass: {
  [key in keyof IViewportSpecifiable]: (content: StyleRule) =>
    | {
        "@media": {
          [K in BreakpointValues]?: StyleRule;
        };
      }
    | StyleRule;
} = {
  mobile: (content: StyleRule) => ({
    "@media": {
      [breakpoints.mobile]: content,
    },
  }),
  mobileAndAbove: (content: StyleRule) => content,
  tablet: (content: StyleRule) => ({
    "@media": {
      [breakpoints.tablet]: content,
    },
  }),
  tabletAndAbove: (content: StyleRule) => ({
    "@media": {
      [breakpoints.tabletAndAbove]: content,
    },
  }),
  tabletAndBelow: (content: StyleRule) => ({
    "@media": {
      [breakpoints.tabletAndBelow]: content,
    },
  }),
  desktopAndAbove: (content: StyleRule) => ({
    "@media": {
      [breakpoints.desktopAndAbove]: content,
    },
  }),
  xlarge: (content: StyleRule) => ({
    "@media": {
      [breakpoints.xlarge]: content,
    },
  }),
};

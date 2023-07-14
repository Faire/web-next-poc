const MIN_WIDTH_BREAKPOINTS = {
  MOBILE: 0,
  TABLET: 768,
  DESKTOP: 1024,
  XLARGE: 1440,
};

export const viewportMediaStrings = {
  tablet: `screen and (min-width: ${
    MIN_WIDTH_BREAKPOINTS.TABLET
  }px) and (max-width: ${MIN_WIDTH_BREAKPOINTS.DESKTOP - 1}px)`,
  desktop: `screen and (min-width: ${
    MIN_WIDTH_BREAKPOINTS.DESKTOP
  }px) and (max-width: ${MIN_WIDTH_BREAKPOINTS.XLARGE - 1}px)`,
  desktopAndAbove: `screen and (min-width: ${MIN_WIDTH_BREAKPOINTS.DESKTOP}px)`,
  xLargeDesktop: `screen and (min-width: ${MIN_WIDTH_BREAKPOINTS.XLARGE}px)`,
  tabletAndAbove: `screen and (min-width: ${MIN_WIDTH_BREAKPOINTS.TABLET}px)`,
  mobile: `screen and (max-width: ${MIN_WIDTH_BREAKPOINTS.MOBILE - 1}px)`,
  tabletAndBelow: `screen and (max-width: ${
    MIN_WIDTH_BREAKPOINTS.TABLET - 1
  }px)`,
};

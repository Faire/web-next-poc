export const breakpoints = {
  mobile: "screen and (max-width: 767px) and (min-width: 0px)",
  tablet: "screen and (max-width: 1023px) and (min-width: 768px)",
  tabletAndAbove: "screen and (min-width: 768px)",
  tabletAndBelow: "screen and (max-width: 767px)",
  desktop: "screen and (max-width: 1439px) and (min-width: 1024px)",
  desktopAndAbove: "screen and (min-width: 1024px)",
  xlarge: "screen and (min-width: 1440px)",
} as const;

export type BreakpointValues = (typeof breakpoints)[keyof typeof breakpoints];

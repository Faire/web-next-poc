import { breakpoints } from "@/app/_lib/ui/breakpoints";

export const responsiveConditions = {
  conditions: {
    mobileAndAbove: {},
    mobile: { "@media": breakpoints.mobile },
    tablet: { "@media": breakpoints.tablet },
    tabletAndAbove: { "@media": breakpoints.tabletAndAbove },
    tabletAndBelow: { "@media": breakpoints.tabletAndBelow },
    desktop: { "@media": breakpoints.desktop },
    desktopAndAbove: { "@media": breakpoints.desktopAndAbove },
    xlarge: { "@media": breakpoints.xlarge },
  },
  defaultCondition: "mobileAndAbove",
} as const;

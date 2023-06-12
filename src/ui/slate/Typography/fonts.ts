import localFont from "next/font/local";

import { TypographyVariant } from "./types";

const serif = localFont({
  src: "./fonts/NantesWeb-Regular.woff2",
  weight: "400",
  style: "normal",
});

const sansThin = localFont({
  src: "./fonts/Graphik-Regular-Web.woff2",
  weight: "200",
  style: "normal",
});

const sansRegular = localFont({
  src: "./fonts/Graphik-Regular-Web.woff2",
  weight: "400",
  style: "normal",
});

const sansMedium = localFont({
  src: "./fonts/Graphik-Medium-Web.woff2",
  weight: "500",
  style: "normal",
});

const sansSemibold = localFont({
  src: "./fonts/Graphik-Semibold-Web.woff2",
  weight: "700",
  style: "normal",
});

export const FONT_CLASSNAMES: Record<TypographyVariant, string> = {
  displayXLSerifRegular: serif.className,
  displayLSerifRegular: serif.className,
  displayMSerifRegular: serif.className,
  displaySSerifRegular: serif.className,
  displaySSansRegular: sansThin.className,
  displaySSansSemiBold: sansSemibold.className,
  pageHeaderSerifRegular: serif.className,
  sectionHeaderSansMedium: sansRegular.className,
  subheadingSansMedium: sansMedium.className,
  subheadingSansRegular: sansThin.className,
  paragraphSansMedium: sansMedium.className,
  paragraphSansRegular: sansThin.className,
  labelSansRegular: sansThin.className,
  labelSansMedium: sansMedium.className,
};

import React from "react";

import * as a from "@/ui/Atoms/Atoms";
import { AtomParam } from "@/ui/Atoms/AtomTypes";
import { cn } from "@/ui/cn";

import { responsiveAtom, ResponsiveProp } from "../ResponsiveValues";

import { FONT_CLASSNAMES } from "./fonts";
import * as styles from "./styles.css";
import { TypographyVariant } from "./types";

type TypographyProps = {
  variant?: TypographyVariant;
  color?: AtomParam<"color">;
  align?: ResponsiveProp<AtomParam<"textAlign">>;
  truncate?: boolean;
  maxLines?: AtomParam<"lineClamp">;
  strikethrough?: boolean;
  "data-test-id"?: string;
};

interface HeadingProps
  extends Omit<
      React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLHeadingElement>,
        HTMLHeadingElement
      >,
      "color"
    >,
    TypographyProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

interface SpanProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    TypographyProps {
  as: "span";
}

interface ParagraphProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, "color">,
    TypographyProps {
  as?: "p";
}

export const Typography: React.FC<
  HeadingProps | SpanProps | ParagraphProps
  // eslint-disable-next-line complexity
> = ({
  as = "p",
  variant = "paragraphSansRegular",
  color = "faireBlack",
  align,
  truncate,
  maxLines,
  strikethrough,
  ..._props
}) => {
  const className = cn(
    styles[variant],
    FONT_CLASSNAMES[variant],
    a.color(color),
    a.color(color),
    align && responsiveAtom("textAlign", align),
    truncate && a.lineClamp(1),
    maxLines && a.lineClamp(maxLines),
    strikethrough && a.textDecoration("line-through")
  );
  const props = { ..._props, className };

  if (as) {
    switch (as) {
      case "h1":
        return <h1 {...props} />;
      case "h2":
        return <h2 {...props} />;
      case "h3":
        return <h3 {...props} />;
      case "h4":
        return <h4 {...props} />;
      case "h5":
        return <h5 {...props} />;
      case "h6":
        return <h6 {...props} />;
      case "span":
        return <span {...props} />;
      case "p":
        return <p {...props} />;
    }
  }

  switch (variant) {
    case "displayXLSerifRegular":
      return <h1 {...props} />;
    case "displayLSerifRegular":
      return <h2 {...props} />;
    case "displayMSerifRegular":
      return <h3 {...props} />;
    case "displaySSerifRegular":
    case "displaySSansRegular":
    case "displaySSansSemiBold":
    case "pageHeaderSerifRegular":
      return <h4 {...props} />;
    case "sectionHeaderSansMedium":
    case "subheadingSansMedium":
    case "subheadingSansRegular":
      return <h5 {...props} />;
    case "paragraphSansMedium":
    case "paragraphSansRegular":
    case "labelSansRegular":
    case "labelSansMedium":
      return <p {...props} />;
  }
};

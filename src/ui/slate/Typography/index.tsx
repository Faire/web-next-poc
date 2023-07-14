import cn from "classnames";
import React from "react";

import { FONT_CLASSNAMES } from "./fonts";
import * as styles from "./styles.css";
import { TypographyVariant } from "./types";

type TypographyProps = {
  variant?: TypographyVariant;
  color?: string;
  truncate?: boolean;
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
> = ({
  as,
  variant = "paragraphSansRegular",
  color = "#333333",
  truncate,
  ..._props
}) => {
  const className = cn(styles[variant], FONT_CLASSNAMES[variant]);
  const style: React.CSSProperties = {
    color,
    ...(truncate ? { "-webkit-line-clamp": "1", wordBreak: "break-word" } : {}),
  };
  const props = { ..._props, className, style };

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

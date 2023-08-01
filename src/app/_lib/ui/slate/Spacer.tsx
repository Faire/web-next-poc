import * as React from "react";

import * as a from "@/app/_lib/ui/Atoms/Atoms";

import { AtomParam } from "../Atoms/AtomTypes";
import { cn } from "../cn";

export type SpacerProps = {
  width?: AtomParam<"width">;
  size?: AtomParam<"width">;
  height?: AtomParam<"width">;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Spacer: React.FC<SpacerProps> = ({
  width,
  height,
  size,
  className,
  ...rest
}) => {
  const c = cn(
    width && a.inlineSize(width),
    height && a.blockSize(height),
    size && a.inlineSize(size),
    size && a.blockSize(size),
    className
  );
  return <div className={c} {...rest} />;
};

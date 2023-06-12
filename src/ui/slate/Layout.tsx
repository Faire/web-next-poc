import { forwardRef } from "react";

import * as a from "@/ui/Atoms/Atoms";

import { AtomParam } from "../Atoms/AtomTypes";
import { cn } from "../cn";

import { responsiveAtom, ResponsiveProp } from "./ResponsiveValues";

export interface IFlexProps extends React.HTMLAttributes<HTMLDivElement> {
  flexGrow?: AtomParam<"flexGrow">;
  align?: ResponsiveProp<AtomParam<"alignItems">>;
  justify?: ResponsiveProp<AtomParam<"justifyContent">>;
  gap?: ResponsiveProp<AtomParam<"gap">>;
}

export const Row = forwardRef<HTMLDivElement, IFlexProps>(
  ({ flexGrow, align, justify, gap, className, ...props }, ref) => {
    const c = cn(
      a.display("flex"),
      flexGrow && responsiveAtom("flexGrow", flexGrow),
      align && responsiveAtom("alignItems", align),
      justify && responsiveAtom("justifyContent", justify),
      gap && responsiveAtom("gap", gap),
      className
    );
    return <div ref={ref} className={c} {...props} />;
  }
);
Row.displayName = "Row";

export const Column = forwardRef<HTMLDivElement, IFlexProps>(
  ({ className, ...props }, ref) => {
    return (
      <Row
        className={cn(a.flexDirection("column"), className)}
        {...props}
        ref={ref}
      />
    );
  }
);
Column.displayName = "Column";

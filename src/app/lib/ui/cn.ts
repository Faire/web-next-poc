import classNames from "classnames";

import { IViewportSpecifiable } from "./__internal__/IViewportSpecifiable";

type Value = string | number | boolean | undefined | null;
type Mapping = Record<string, unknown>;
interface ArgumentArray extends Array<Argument | IViewportSpecifiable> {}
type Argument = Value | Mapping | ArgumentArray;

export const isIViewportSpecifiable = (
  item: Argument | IViewportSpecifiable
): item is IViewportSpecifiable => {
  if (typeof item === "object") {
    return (item as IViewportSpecifiable).mobileAndAbove !== undefined;
  } else {
    return false;
  }
};

export const cn = (...args: ArgumentArray) => {
  const updatedArgs: classNames.ArgumentArray = args.map((arg) => {
    if (isIViewportSpecifiable(arg)) {
      return arg.mobileAndAbove;
    }
    return arg;
  }) as string[];
  return classNames(updatedArgs);
};

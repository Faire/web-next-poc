import * as a from "@/ui/Atoms/Atoms";

import { IViewportSpecifiable } from "../__internal__/IViewportSpecifiable";
import { cn } from "../cn";
import { tabletAndAbove, desktopAndAbove, xlarge } from "../viewportSpecifier";

export type ResponsiveValues<T> = {
  mobileAndAbove: T;
  tabletAndAbove?: T;
  desktopAndAbove?: T;
  xlarge?: T;
};

export type ResponsiveProp<T> = T | ResponsiveValues<T>;

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const isResponsiveValue = (value: any): value is ResponsiveValues<any> => {
  if (typeof value !== "object") {
    return false;
  }
  return value?.mobileAndAbove !== undefined;
};

type GetType<T> = {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  [K in keyof T]: T[K] extends (...args: any) => any ? ReturnType<T[K]> : T[K];
};
type IViewportSpecifiableFrom<T> = Pick<
  T,
  {
    [K in keyof T]: T[K] extends IViewportSpecifiable ? K : never;
  }[keyof T]
>;

type Atoms = typeof a;
type AtomReturnTypes = GetType<typeof a>;
type ResponsiveAtoms = IViewportSpecifiableFrom<AtomReturnTypes>;
type AtomParam<T extends keyof ResponsiveAtoms> = Parameters<Atoms[T]>[0];
type ResponsiveAtomParam<T extends keyof ResponsiveAtoms> = ResponsiveProp<
  AtomParam<T>
>;

export const responsiveAtom = <T extends keyof ResponsiveAtoms>(
  atom: T,
  val: ResponsiveAtomParam<T>
) => {
  const fn = a[atom] as (val: AtomParam<T>) => IViewportSpecifiable;
  if (isResponsiveValue(val)) {
    return cn(
      fn(val.mobileAndAbove),
      val.tabletAndAbove && tabletAndAbove(fn(val.tabletAndAbove)),
      val.desktopAndAbove && desktopAndAbove(fn(val.desktopAndAbove)),
      val.xlarge && xlarge(fn(val.xlarge))
    );
  } else {
    return fn(val);
  }
};

export const responsiveStyles = (
  styles: {
    [key in keyof React.CSSProperties]?: ResponsiveProp<
      React.CSSProperties[key]
    >;
  },
  viewport: any
): React.CSSProperties => {
  if (!styles) {
    return {};
  }

  const s: React.CSSProperties = {};
  let key: keyof typeof styles;
  for (key in styles) {
    let val = styles[key];
    if (!val) {
      continue;
    }
    if (isResponsiveValue(val)) {
      val =
        (viewport.isXLargeDesktop && val.xlarge) ||
        (viewport.isDesktopAndAbove && val.desktopAndAbove) ||
        (viewport.isTabletAndAbove && val.tabletAndAbove) ||
        val.mobileAndAbove;
    }
    Object.assign(s, { [key]: val });
  }
  return s;
};

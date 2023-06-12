import { IViewportSpecifiable } from "./IViewportSpecifiable";

export const viewportUnwrapperUtil =
  (breakpoint: keyof IViewportSpecifiable) =>
  (...viewportSpecifiables: IViewportSpecifiable[]) =>
    viewportSpecifiables
      .map((viewportSpecifiable) => viewportSpecifiable[breakpoint])
      .join(" ");

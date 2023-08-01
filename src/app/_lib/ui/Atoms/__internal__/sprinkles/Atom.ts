import { IViewportSpecifiable } from "@/app/_lib/ui/__internal__/IViewportSpecifiable";

export type ViewportSpecifiableAtom<T> = (value: T) => IViewportSpecifiable;
export type BasicAtom<T> = (value: T) => string;

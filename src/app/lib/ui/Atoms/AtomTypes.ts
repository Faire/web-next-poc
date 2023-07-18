import * as a from "./Atoms";

export type Atoms = typeof a;
export type AtomNames = keyof Atoms;
export type AtomParam<T extends AtomNames> = Parameters<Atoms[T]>[0];

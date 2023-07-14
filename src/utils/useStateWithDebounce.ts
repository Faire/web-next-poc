import { Dispatch, SetStateAction, useState } from "react";

import { useDebouncedValue } from "./useDebouncedValue";

export const useStateWithDebounce = <S>(
  initialValue: S,
  delay: number
): {
  value: S;
  setValue: Dispatch<SetStateAction<S>>;
  debouncedValue: S;
} => {
  const [value, setValue] = useState(initialValue);
  const debouncedValue = useDebouncedValue(value, delay);
  return { value, setValue, debouncedValue };
};

import { useCallback, useState } from 'react';

export const useToggle = (): [
  boolean,
  { toggle: () => void; on: () => void; off: () => void }
] => {
  const [bool, setBool] = useState(false);
  const toggle = useCallback(() => {
    setBool((prevState) => !prevState);
  }, []);

  const on = useCallback(() => {
    setBool((prev) => (prev = true));
  }, []);

  const off = useCallback(() => {
    setBool((prev) => (prev = false));
  }, []);

  return [bool, { toggle, on, off }];
};

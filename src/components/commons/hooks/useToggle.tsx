import { setDefaultResultOrder } from 'dns/promises';
import { Dispatch, SetStateAction, useCallback, useState } from 'react';

// type useToggleProps = {
//   isClicked: boolean;
//   setIsClicked: Dispatch<SetStateAction<boolean>>;
// };
export const useToggle = (): [
  boolean,
  { toggle: () => void; on: () => void; off: () => void }
] => {
  const [bool, setBool] = useState(false);
  const [True, setIsTrue] = useState(false); // TODO: 変数名検討中
  const [isFalse, setIsFalse] = useState(false); // TODO: 変数名検討中
  const toggle = useCallback(() => {
    setBool((prevState) => !prevState);
  }, []);

  const on = useCallback(() => {
    setIsTrue((prev) => (prev = true));
  }, []);

  const off = useCallback(() => {
    setIsFalse((prev) => (prev = false));
  }, []);

  return [bool, { toggle, on, off }];
};

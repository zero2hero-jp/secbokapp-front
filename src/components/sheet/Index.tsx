import React, {
  ReactElement,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

import { get } from '@Utils/FetchQuery';
import { Show } from '@Components/sheet/Show';
import { SheetType } from '@Types/SheetType';

type IndexProps = {
  setChildren: Dispatch<SetStateAction<ReactElement>>;
};

export const Index = ({ setChildren }: IndexProps) => {
  const [data, setData] = useState<SheetType[]>([]);

  useEffect(() => {
    get('/api/v1/sheets').then((data) => {
      setData(data);
    });
  }, []);

  const handleOnClikId = (id: string) => {
    setChildren(<Show id={id} />);
  };

  return (
    // ISSUED: https://github.com/zero2hero-jp/secbokapp-front/issues/41
    <div>
      <ul>
        {data.map((d) => (
          <li
            key={d.id}
            onClick={() => {
              handleOnClikId(d.id);
            }}
          >
            {d.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

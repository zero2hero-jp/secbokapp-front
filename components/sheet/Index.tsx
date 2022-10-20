import React, { 
  ReactElement, 
  useEffect, 
  useState,
  Dispatch,
  SetStateAction
} from 'react'

import { SheetType } from 'types/SheetType'
import { get } from 'utils/FetchQuery'
import { Show } from 'components/sheet/Show'

type IndexProps = {
  setChildren: Dispatch<SetStateAction<ReactElement>>
}

export const Index = ({setChildren}: IndexProps) => {
  const [data, setData] = useState<SheetType[]>([]);

  useEffect(() => {
    get('/api/v1/sheets').then(data => { setData(data) })
  }, [])
  
  const handleOnClikId = (id: string) => {
    setChildren(<Show id={id} />)
  }

  return(
    // TODO: 装飾
    <div>
      <ul>
        { data.map(d => (
          <li key={d.id} onClick={()=>{ handleOnClikId(d.id) }}>
            {d.id}
          </li>
        ))}
      </ul>
    </div>
  )
}
import Link from 'next/link'
import { 
  ReactElement,
  Dispatch, 
  SetStateAction 
} from 'react'

import { Index } from 'components/sheet/Index'
import { About } from 'components/About'

type HeaderProps = {
  setChildren: Dispatch<SetStateAction<ReactElement>>
}

export const Header = ({setChildren}: HeaderProps) => {
  return(
    // TODO: 装飾
    <div>
      <ul>
        <li><a href="#" onClick={()=>{setChildren(<Index setChildren={setChildren} />)}}>Index</a></li>
        <li><a href="#" onClick={()=>{setChildren(<About />)}}>About</a></li>
      </ul>
    </div>
  )
}

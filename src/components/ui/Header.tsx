import Link from 'next/link';
import { ReactElement, Dispatch, SetStateAction } from 'react';

import { Index } from '@Components/sheet/Index';
import { About } from '@Components/About';
import { SVG } from '@Commons/SVG';
import { Button } from '@Commons/Button';
import { Logo } from '../Logo';

type HeaderProps = {
  setChildren: Dispatch<SetStateAction<ReactElement>>;
};

export const Header = ({ setChildren }: HeaderProps) => {
  return (
    // AT_SEE: https://github.com/zero2hero-jp/secbokapp-front/issues/43
    <div>
      {/* TODO: あとで下記の部分を使います */}
      {/* <ul>
        <li><a href="#" onClick={()=>{setChildren(<Index setChildren={setChildren} />)}}>Index</a></li>
        <li><a href="#" onClick={()=>{setChildren(<About />)}}>About</a></li>
      </ul> */}
      <header className='header-wrapper'>
        <div className='header-contents'>
          <div>
            <Button className='header-button'>
              <SVG
                variant='outline'
                name='search'
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                strokeWidth='2'
                stroke='currentColor'
                className='icon-4'
              />
            </Button>
          </div>
          <div>
            <Button className='header-button'>
              <SVG
                variant='outline'
                name='chat-bubble'
                d='M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155'
                strokeWidth='2'
                stroke='currentColor'
                className='icon-4'
              />
            </Button>
          </div>
          <div>
            <Button className='header-button'>
              <SVG
                variant='outline'
                name='exclamation'
                d='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'
                strokeWidth='2'
                stroke='currentColor'
                className='icon-4'
              />
            </Button>
          </div>
          <div className='border-r-[1px] h-6 border-gray-200'></div>
          <Logo />
          <div>
            <Button className='flex items-center'>
              <SVG
                variant='outline'
                name='arrow-bottom'
                d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                strokeWidth='2'
                stroke='currentColor'
                className='icon-3'
              />
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
};

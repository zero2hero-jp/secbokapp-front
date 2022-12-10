import React, { ReactElement, Dispatch, SetStateAction, useState } from 'react';

import { Header } from '@Components/ui/Header';
import { Footer } from '@Components/ui/Footer';
import { SideBar } from './sidebar/SideBar';
import { useToggle } from '@Commons/hooks/useToggle';

type LayoutProps = {
  children: ReactElement;
  setChildren: Dispatch<SetStateAction<ReactElement>>;
};

export const Layout = ({ children, setChildren }: LayoutProps) => {
  const [isClicked, { on, off }] = useToggle();
  console.log('Layout', isClicked);

  return (
    <div className='flex relative md:static'>
      <SideBar isClicked={isClicked} onClick={off} />

      <div className='flex flex-col'>
        <Header setChildren={setChildren} onClick={on} />
        {children}
        <Footer />
      </div>
    </div>
  );
};

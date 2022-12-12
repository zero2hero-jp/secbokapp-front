import React, { ReactElement, Dispatch, SetStateAction, useState } from 'react';

import { Header } from '@Components/ui/Header';
import { Footer } from '@Components/ui/Footer';
import { SideBar } from '../sidebar/SideBar';
import { useToggle } from '@Commons/hooks/useToggle';

type LayoutProps = {
  children: ReactElement;
  // setChildren: Dispatch<SetStateAction<ReactElement>>;
};

export const Layout = ({ children /* setChildren */ }: LayoutProps) => {
  const [isClicked, { on, off }] = useToggle();

  return (
    <div className='flex relative md:static'>
      <SideBar isClicked={isClicked} onClick={off} />
      <div className={`${isClicked ? 'sidebar-clicked-bg' : ''}`}></div>
      <div className='flex flex-col'>
        <Header
          /* setChildren={setChildren} */ isClicked={isClicked}
          onClick={on}
        />
        <main className='main'>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

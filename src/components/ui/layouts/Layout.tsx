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
      <div
        className={`${
          isClicked &&
          'absolute bg-opacity-20 bg-slate-800 z-20 h-screen w-full'
        }`}
      ></div>
      <div className='flex flex-col'>
        <Header
          /* setChildren={setChildren} */ isClicked={isClicked}
          onClick={on}
        />
        <main className='px-4 md:px-4 lg:px-8 pt-6'>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

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

  return (
    <div className='flex relative md:static'>
      {/* sidebarのトグルをoffにしたら useToggleから toOff が falseになりsideBarに流れてくる */}
      <SideBar isClicked={isClicked} onClick={off} />

      <div className='flex flex-col'>
        <Header setChildren={setChildren} isClicked onClick={on} />
        {children}
        <Footer />
      </div>
    </div>
  );
};

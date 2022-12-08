import React, { ReactElement, Dispatch, SetStateAction, useState } from 'react';

import { Header } from '@Components/ui/Header';
import { Footer } from '@Components/ui/Footer';
import { SideBar } from './sidebar/SideBar';

type LayoutProps = {
  children: ReactElement;
  setChildren: Dispatch<SetStateAction<ReactElement>>;
};

export const Layout = ({ children, setChildren }: LayoutProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCallSidebar = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className='flex relative md:static'>
      <SideBar isClicked={isClicked} onClick={handleCallSidebar} />
      <div className='flex flex-col'>
        <Header setChildren={setChildren} onClick={handleCallSidebar} />
        {children}
        <Footer />
      </div>
    </div>
  );
};

import React, { ReactElement, Dispatch, SetStateAction } from 'react';

import { Header } from '@Components/ui/Header';
import { Footer } from '@Components/ui/Footer';
import { SideBar } from './sidebar/SideBar';

type LayoutProps = {
  children: ReactElement;
  setChildren: Dispatch<SetStateAction<ReactElement>>;
};

export const Layout = ({ children, setChildren }: LayoutProps) => {
  return (
    <div className='flex'>
      <SideBar />
      <div className='flex flex-col'>
        <Header setChildren={setChildren} />
        {children}
        <Footer />
      </div>
    </div>
  );
};

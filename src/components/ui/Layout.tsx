import React, { ReactElement, Dispatch, SetStateAction } from 'react';

import { Header } from '@Components/ui/Header';
import { Footer } from '@Components/ui/Footer';

type LayoutProps = {
  children: ReactElement;
  setChildren: Dispatch<SetStateAction<ReactElement>>;
};

export const Layout = ({ children, setChildren }: LayoutProps) => {
  return (
    <main className=''>
      <Header setChildren={setChildren} />
      {children}
      <Footer />
    </main>
  );
};

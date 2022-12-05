import React, { ReactElement, Dispatch, SetStateAction } from 'react';

import { Header } from 'src/components/Header';
import { Footer } from 'src/components/Footer';

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

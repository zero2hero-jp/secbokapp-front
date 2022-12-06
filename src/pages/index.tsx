import type { NextPage } from 'next';
import Head from 'next/head';

import { ReactElement, useState } from 'react';

import { Layout } from '@Components/ui/Layout';
import { About } from '@Components/About';
import { Main } from '@Components/ui/Main';

const Home: NextPage = () => {
  // const [children, setChildren] = useState<ReactElement>(<About />);
  const [children, setChildren] = useState<ReactElement>(<Main />);

  return (
    <>
      <Head>
        <title>SecBokApp</title>
      </Head>

      <Layout setChildren={setChildren}>{children}</Layout>
    </>
  );
};

export default Home;

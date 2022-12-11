import type { NextPage } from 'next';
import Head from 'next/head';

import { ReactElement, useState } from 'react';

import { Layout } from '@Components/ui/layouts/Layout';
// import { About } from '@Pages/about';
// import { Main } from '@Components/ui/Main';
import { Index } from '@Components/ui/pages/Index';

const Home: NextPage = () => {
  // const [children, setChildren] = useState<ReactElement>(<About />);
  /*  メモ: Nextの場合はPages配下に入ったjsxとtsxはpageとして認識されます
   *  pages/index.tsx => topページ
   *  pages/about.tsx => aboutページ
   *
   */
  // const [children, setChildren] = useState<ReactElement>(<Main />);

  return (
    <>
      <Head>
        <title>SecBokApp</title>
      </Head>

      <Layout /* setChildren={setChildren} */>
        <Index />
      </Layout>
    </>
  );
};

export default Home;

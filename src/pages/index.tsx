import type { NextPage } from 'next';
import Head from 'next/head';

import { ReactElement, useState } from 'react';

import { Layout } from '@Components/ui/Layout';
import { About } from '@Pages/About';
import { Main } from '@Components/ui/Main';

const Home: NextPage = () => {
  // const [children, setChildren] = useState<ReactElement>(<About />);
  /*  メモ: Nextの場合はPages配下に入ったjsxとtsxはpageとして認識されます
   *  pages/index.tsx => topページ
   *  pages/about.tsx => aboutページ
   *　今の形がよいかは検討する必要がありそうです
   */
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

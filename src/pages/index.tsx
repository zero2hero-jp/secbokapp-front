import type { NextPage } from 'next';
import Head from 'next/head';

import { Layout } from '@Components/ui/layouts/Layout';
import { IndexPage } from '@Components/ui/pagesContents/IndexPage';

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
      {/* <Seo /> */}
      <Head>
        <title>SecBokApp</title>
      </Head>

      <Layout /* setChildren={setChildren} */>
        <IndexPage />
      </Layout>
    </>
  );
};

export default Home;

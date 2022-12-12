import { Layout } from '@Components/ui/layouts/Layout';
import { AboutPage } from '@Components/ui/pagesContents/AboutPage';
import Head from 'next/head';

const about = () => {
  // const defaultTitle = 'demo'
  // const defaultDescription = 'demo'

  // const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle
  // const description = pageDescription ? pageDescription : defaultDescription
  // const url = pagePath
  // const imgUrl = pageImg
  // const imgWidth = pageImgWidth ? pageImgWidth : 1280
  // const imgHeight = pageImgHeight ? pageImgHeight : 640
  return (
    <>
      <Head>
        {/* TODO: あとでHeadコンポーネントを作成 */}
        {/* <title>SecBokApp AboutPage</title>
        <meta name='viewport' content='width=device-width,initial-scale=1.0' />
        <meta name='viewport' content='width=device-width,initial-scale=1.0' />
        <meta name='description' content={description} />
        <meta property='og:url' content={url} />
        <meta property='og:title' content={title} />
        <meta property='og:site_name' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={imgUrl} />
        <meta property='og:image:width' content={String(imgWidth)} />
        <meta property='og:image:height' content={String(imgHeight)} />
        <link rel='preconnect' href='https://fonts.gstatic.com' /> */}
        {/* <link
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&amp;display=swap"
        rel="stylesheet"
      /> */}
        {/* <link rel='canonical' href={url} /> */}
      </Head>
      {
        // ISSUED: https://github.com/zero2hero-jp/secbokapp-front/issues/39
        // ISSUED: https://github.com/zero2hero-jp/secbokapp-front/issues/40
      }
      <Layout /* setChildren={setChildren} */>
        <AboutPage />
      </Layout>
    </>
  );
};
export default about;

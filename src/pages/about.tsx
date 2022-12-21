import { Layout } from '@Components/ui/layouts/Layout';
import { AboutPage } from '@Components/ui/pagesContents/AboutPage';
import React from 'react';

const about = () => {
  return (
    <>
      {/* <Seo /> */}
      <Layout>
        <AboutPage />
      </Layout>
    </>
  );
};

export default about;

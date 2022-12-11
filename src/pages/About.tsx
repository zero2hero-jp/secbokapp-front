import { Layout } from '@Components/ui/layouts/Layout';
import { About } from '@Components/ui/pagesContents/About';

const about = () => {
  return (
    <div>
      {
        // ISSUED: https://github.com/zero2hero-jp/secbokapp-front/issues/39
        // ISSUED: https://github.com/zero2hero-jp/secbokapp-front/issues/40
      }
      <Layout /* setChildren={setChildren} */>
        <About />
      </Layout>
    </div>
  );
};
export default about;

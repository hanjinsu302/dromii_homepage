import Layout from '@/components/Layout/Layout';
import Seo from '@/components/Seo/Seo';
import Top from '@/components/Top/Top';
import GlobalStyles from '@/styles/GlobalStyles';
import { appWithTranslation } from 'next-i18next';
import Script from 'next/script';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Seo />
      <GlobalStyles />
      <Top />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default appWithTranslation(MyApp);

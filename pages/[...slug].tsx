import Head from 'next/head';
import Header from 'components/header/Header';
import MapContent from 'components/MapContent';
import Footer from 'components/footer/Footer';
import { IPageProps } from '../_lib/types';
import { fetchPageProps } from '_lib/sanity-utils';

const IndexPage = (props: IPageProps) => {
  const { content, menu, settings, name, description, title } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header items={menu} settings={settings} />
      <MapContent content={content} />
      <Footer />
      <style jsx global>{`
        :root {
          --bg-color: ${settings.bgColor.hex};
          --text-color: ${settings.textColor.hex};
          --accent-color: ${settings.accentColor.hex};
        }
      `}</style>
    </>
  );
};

export const getServerSideProps = async (context) => {
  return await fetchPageProps(context);
};

export default IndexPage;

import Head from 'next/head';
import Header from 'components/header/Header';
import MapContent from 'components/MapContent';
import Footer from 'components/footer/Footer';
import { IPageProps } from '../_lib/types';
import { fetchPageProps } from '_lib/sanity-utils';
import { NOTFOUND } from 'dns';
import Link from 'next/link';

const IndexPage = (props: IPageProps) => {
  const { content, menu, settings, description, title, notFound, menuColor } = props;

  console.log('menuColor', menuColor);
  if (notFound) {
    return <div className='h-screen flex flex-col justify-center items-center'>
      <h1 className='font-medium'>404 Page not Found</h1>
      <div className=''><Link href="/etusivu" className='button border-text border-2'>Etusivu</Link></div>
      </div>

  }
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header items={menu} settings={settings} menuColor={menuColor} />
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

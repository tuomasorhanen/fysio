import { fetchPageProps } from '_lib/sanity-utils';
import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import MapContent from 'components/MapContent';
import Head from 'next/head';
import Link from 'next/link';

import { IPageProps } from '../_lib/types';

const IndexPage = (props: IPageProps) => {
  const { content, menu, settings, description, title, notFound, menuColor, ogTitle, ogDescription, ogImage, slug } =
    props;

  if (notFound) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="font-medium">404 Page not Found</h1>
        <div className="">
          <Link href="/etusivu" className="button border-2 border-text">
            Etusivu
          </Link>
        </div>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`https://fysiosarianne.fi/${slug.current}`} />
        <meta
          property="og:image"
          content={
            ogImage?.asset?.url ||
            'https://cdn.sanity.io/images/dg23ndly/production/d2088f3e8babd927c049b4649dab7c213bce74e2-724x842.jpg'
          }
        />
        <meta property="og:image:type" content={ogImage?.asset?.mimeType || 'image/jpeg'} />
        <meta property="og:image:width" content={ogImage?.asset?.metadata?.dimensions?.width || '500'} />
        <meta property="og:image:height" content={ogImage?.asset?.metadata?.dimensions?.height || '500'} />
        <meta
          property="og:description"
          content={
            ogDescription ||
            'Olen valmistunut fysioterapeutiksi vuonna 2013 ja äitiys- ja lantionpohjan fysioterapian parissa olen työskennellyt vuodesta 2020 lähtien. Viime vuosina olen kouluttautunut ja syventänyt ammattitaitoani lukuisilla äitiysfysioterapian ja lantionpohjan koulutuksilla. Tieto muun muassa suorien vatsalihasten erkauman sekä lantionpohjan toimintahäiriöiden kuntoutuksesta kehittyy koko ajan ja säännöllinen kouluttautuminen on minulle tärkeää, jotta raskaana olevien ja synnyttäneiden äitien olisi mahdollista saada ajantasaista ja viimeisimpään tietoon pohjautuvaa ohjausta ja kuntoutusta. Vastaanotollani tulet kohdatuksi yksilöllisesti ja kokonaisvaltaisesti, ja fysioterapia rakentuu juuri sinun tilanteeseesi sopien; voimavarojesi, toiveidesi ja tavoitteidesi pohjalta. Ydinosaamistani on muun muassa vatsalihasten erkauman kuntoutus, keskivartalon ja lantionpohjan toimintaan liittyvien haasteiden kuntoutus, liikuntaharjoittelu raskausaikana ja synnytyksen jälkeen, liitoskipujen hoito sekä sektiosynnytyksen jälkeinen palautuminen ja arpien hoito.'
          }
        />
        <meta property="og:title" content={ogTitle || 'Fysiosarianne'} />
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

export const getStaticProps = async (context) => {
  const slug = context.params?.slug || 'etusivu';
  const props = await fetchPageProps(slug);

  return {
    ...props,
    revalidate: 3600,
  };
};

export async function getStaticPaths() {
  const slugs = ['etusivu', 'palvelut', 'minusta', 'hinnasto', 'ajanvaraus']; 

  const paths = slugs.map(slug => ({
    params: { slug: [slug] },
  }));

  return {
    paths,
    fallback: 'blocking',  };
}


export default IndexPage;

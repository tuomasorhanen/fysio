import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Header from 'components/header/Header';
import MapContent from 'components/MapContent';
import Footer from 'components/footer/Footer';
import { IPageProps, IHero } from '../_lib/types';
import { fetchMenuItems, fetchPageData, fetchSiteSettings } from '_lib/sanity-utils';

const IndexPage = (props: IPageProps) => {
  const { content, menu, settings, name, description } = props;
  const heroBgColor = content[0] && content[0]._type === 'hero' ? (content[0] as IHero).heroBgColor?.hex : '';

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={description} />
      </Head>
      <Header items={menu} settings={settings} heroBgColor={heroBgColor} key={heroBgColor} />
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

export const getServerSideProps: GetServerSideProps<IPageProps> = async context => {
  context.res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200');
  const slug = context.query.slug || 'etusivu';

  const pageResponse = await fetchPageData(slug);
  if (!pageResponse) {
    return { notFound: true };
  }

  const [menuResponse, siteSettingsResponse] = await Promise.all([fetchMenuItems(), fetchSiteSettings()]);

  return {
    props: {
      ...pageResponse,
      menu: menuResponse,
      settings: siteSettingsResponse,
    },
  };
};

export default IndexPage;

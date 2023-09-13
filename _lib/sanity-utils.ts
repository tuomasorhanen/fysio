import { client } from '_lib/client';
import resolveLinks from '_lib/resolveLinks';
import resolveReferences from '_lib/resolvers/resolveReferences';
import { IMenuItem, IPageProps } from '_lib/types';
import { GetServerSidePropsContext } from 'next';
import { groq } from 'next-sanity';


export const fetchPageData = async (slug: string | string[]): Promise<IPageProps | null> => {
  const pageQuery = groq`
  *[_type == 'page' && slug.current == '${slug}']{
    ...,
    content[]{
      ...,
      image{
        alt,
      asset->{
        url,
      },
    }
    },
  }[0]
  `;

  let pageResponse = await client.fetch(pageQuery);
  if (pageResponse == null) return null;
  
  pageResponse = await resolveLinks(pageResponse);
  pageResponse = await resolveReferences(pageResponse);

  return pageResponse;
};

export const fetchMenuItems = async (): Promise<IMenuItem[]> => {
  const menuQuery = groq`
    *[_type == 'page' && defined(menuOrder)]{
      name,
      slug,
      menuOrder,
      title,
    } | order(menuOrder asc)
  `;
  return await client.fetch(menuQuery);
};

export const fetchSiteSettings = async () => {
  const siteSettingsQuery = groq`
    *[_type == 'siteSettings'][0]{
    ...,
        logo{
          alt,
          asset->{
            url
          }
        }
    }
  `;

  return await client.fetch(siteSettingsQuery);
};

export async function fetchPageProps(context: GetServerSidePropsContext): Promise<{ props: IPageProps }> {
  context.res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=7200');
  const slug = context.query.slug || 'etusivu';

  const pageResponse = await fetchPageData(slug);
  if (!pageResponse) {
    return { props: { notFound: true } as any };
  }

  const [menuResponse, siteSettingsResponse] = await Promise.all([fetchMenuItems(), fetchSiteSettings()]);

  return {
    props: {
      ...pageResponse,
      menu: menuResponse,
      settings: siteSettingsResponse,
    },
  };
}
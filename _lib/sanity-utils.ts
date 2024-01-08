import resolveLinks from '_lib/resolveLinks';
import resolveReferences from '_lib/resolvers/resolveReferences';
import { IMenuItem, IPageProps } from '_lib/types';
import { groq } from 'next-sanity';
import { client } from './client';

export const fetchPageData = async (slug: string | string[]): Promise<IPageProps | { notFound: true } | null> => {
  const pageQuery = groq`
  *[_type == 'page' && slug.current == '${slug}']{
    ...,
    ogImage{
      alt,
      asset->
    },
    content[]{
      ...,
      image{
        alt,
      asset->
    },
    },
  }[0]
  `;

  let pageResponse = await client.fetch(pageQuery);
  if (pageResponse == null) return { notFound: true };

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
          asset->
        }
    }
  `;

  return await client.fetch(siteSettingsQuery);
};

export async function fetchPageProps(slug: string): Promise<{ props: IPageProps | { notFound: true } }> {
  const pageResponse = await fetchPageData(slug);
  if (!pageResponse) {
    return { props: { notFound: true } };
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

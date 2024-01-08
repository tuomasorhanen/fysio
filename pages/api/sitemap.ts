import { groq } from 'next-sanity';

import { client } from '../../_lib/client';

export default async (req, res) => {
  const query = groq`*[_type == 'page']{
    slug,
  }`;

  const pages = await client.fetch(query);

  res.setHeader('Content-Type', 'text/xml');
  res.write(createSitemap(pages));
  res.end();
};

const createSitemap = pages => {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://fysiosarianne.fi/</loc>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
      ${pages
        .filter(page => page.slug.current !== 'etusivu')
        .map(page => {
          return `
            <url>
              <loc>https://fysiosarianne.fi/${page.slug.current}</loc>
              <changefreq>monthly</changefreq>
              <priority>0.8</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;
};


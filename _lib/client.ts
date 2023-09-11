import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'dg23ndly',
  dataset: 'production',
  apiVersion: '2021-09-01',
  useCdn: true,
});

export { client };

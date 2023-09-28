import { createClient } from 'next-sanity';

export const client = createClient({
  apiVersion: '2022-11-28',
  dataset: 'production',
  projectId: 'dg23ndly',
  useCdn: true,
});

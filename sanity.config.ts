import { defineConfig } from 'sanity';
import { colorInput } from '@sanity/color-input';
import { deskTool } from 'sanity/desk';
import { schema } from './sanity/Schemas/schema';
import { structure } from './sanity/Schemas/types/structure';

export default defineConfig({
  basePath: '/studio',
  dataset: 'production',
  projectId: 'dg23ndly',
  schema,
  plugins: [deskTool({ structure }), colorInput()],
});

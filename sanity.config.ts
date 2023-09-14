import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { colorInput } from '@sanity/color-input';
import { deskTool } from 'sanity/desk';
import { myTheme } from 'theme';
import { schema } from './sanity/Schemas/schema';
import { structure } from './sanity/Schemas/types/structure';
import { media } from 'sanity-plugin-media';

export default defineConfig({
  basePath: '/studio',
  dataset: "production",
  projectId: "dg23ndly",
  schema,
  plugins: [deskTool({ structure }), colorInput(), visionTool({ defaultApiVersion: "2022-11-28"}), media()
],
  theme: myTheme,
});

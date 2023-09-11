import { SchemaTypeDefinition } from 'sanity';
import Page from './Page Builder/page';
import LandingPage from './Page Builder/landingPage';
import siteSettings from './Site Settings/siteSettings';
import Card from './types/card';
import columns from './types/columns';
import CustomButton from './types/customButton';
import grid from './types/grid';
import lineBreak from './types/lineBreak';
import uiElement from './types/uiElement';
import Hero from './types/Hero';
import spacer from './types/spacer';
import textContent from './types/textContent';
import pricing from './types/pricing';
import service from './Service/service';
import post from './Post/post';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    //Documents
    Page,
    LandingPage,
    siteSettings,
    service,
    post,

    //Objects
    textContent,
    Card,
    columns,
    CustomButton,
    grid,
    Hero,
    lineBreak,
    uiElement,
    spacer,
    pricing,
  ],
};

import { RiPagesLine } from 'react-icons/ri';
import { defineField } from 'sanity';

const Page = {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: RiPagesLine,
  groups: [
    {
      name: 'general',
      title: 'General',
    },
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'seo',
      title: 'Seo',
    },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the page',
      group: 'general',
      validation: Rule => Rule.required(),
    }),
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'seo',
      description: 'What shows up as the link text in search engine',
      validation: Rule => [Rule => Rule.required().error('Title is required.')],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      group: 'seo',
      description: 'Describe the page for search engines.',
      validation: Rule => [Rule => Rule.required().error('Title is required.')],
    },
    {
      type: 'string',
      title: 'Open Graph Title',
      name: 'ogTitle',
      description:
        'Set the title Open Graph should use. In most situations, this should be different from the value of the title prop',
    },
    {
      type: 'string',
      title: 'Open Graph Description',
      name: 'ogDescription',
      description:
        'Set the description Open Graph should use. In most situations, this should be different from the value of the description prop.',
    },
    {
      type: 'image',
      title: 'Open Graph Image',
      name: 'ogImage',
      description:
        'URL of the image that should be used in social media previews. If you define this, you must define two other OG basic properties as well: title and type.',
    },
    defineField({
      name: 'slug',
      title: 'Slug',
      description: 'Slug creates a navigation path to your page.',
      type: 'slug',
      validation: Rule => [Rule.required().error('A page without a slug can not be navigated to.')],
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'menuOrder',
      title: 'Menu order',
      description: 'Order in which this page is shown on menu. Leave empty if not wanted in menu.',
      type: 'number',
    }),
    defineField({
      name: 'menuColor',
      title: 'Menu color',
      description: 'Color of the menu item.',
      type: 'string',
      options: {
        list: [
          { title: 'White', value: 'white' },
          { title: 'Black', value: 'black' },
        ],
      },
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      group: 'content',
      of: [
        { type: 'hero' },
        { type: 'headingAndTitle' },
        { type: 'customButton' },
        { type: 'uiElement' },
        { type: 'grid' },
        { type: 'spacer' },
        { type: 'pricing' },
        {
          name: 'service',
          type: 'reference',
          to: [{ type: 'service' }],
        },
        {
          name: 'post',
          type: 'reference',
          to: [{ type: 'post' }],
        },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Menu order',
      name: 'menuOrder',
      by: [{ field: 'menuOrder', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};

export default Page;

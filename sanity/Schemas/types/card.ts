import { defineField } from 'sanity';
import { BsCardText } from 'react-icons/bs';

const Card = defineField({
  name: 'card',
  title: 'Card',
  type: 'object',
  icon: BsCardText,
  fields: [
    {
      name: 'layout',
      title: 'Card Layout',
      type: 'string',
      options: {
        list: [
          { title: 'image-top-rounded-full', value: 'image-top-rounded-full' },
        ],
        validation: Rule => [Rule.required().error('A layout is required.')],
      },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
      ]
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({ parent }) =>
        parent.layout !== 'image-top' && parent.layout !== 'image-reveal' && parent.layout !== 'image-top-rounded-full',
    },
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'landingPage' }] }],
    },
  ],
});

export default Card;

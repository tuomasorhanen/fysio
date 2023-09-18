import { defineField } from 'sanity';
import { RxButton } from 'react-icons/rx';

const CustomButton = defineField({
  name: 'customButton',
  title: 'Custom Button',
  type: 'object',
  icon: RxButton,
  fields: [
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      validation: Rule => [Rule.required().error('At least one button is required.')],
      of: [{ type: 'reference', to: [{ type: 'landingPage' }] }],
    },
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'left', value: 'left' },
          { title: 'center', value: 'vertical' },
        ],
        layout: 'radio',
      },
    }
  ],
  preview: {
    select: {
      buttons: 'buttons',
    },
    prepare() {
      return {
        title: 'Buttons',
      };
    },
  },
});

export default CustomButton;

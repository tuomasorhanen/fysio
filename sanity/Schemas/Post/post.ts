import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'post',
    title: 'post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            description: 'Your post should have a title. This will be displayed on the post preview card.',
            type: 'string',
            validation: Rule => [Rule.required().error('Title is required.')],
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            description: 'Slug creates a navigation path to your post.',
            type: 'slug',
            validation: Rule => [Rule.required().error('A post without a slug can not be navigated to.')],
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            description: 'Add a description of your post.',
            type: 'array',
            of: [{ type: 'blockContent' }],
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            description: 'This image will be shown in the preview card for your post.',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
});


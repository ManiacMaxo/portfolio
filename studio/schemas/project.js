export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            codegen: { required: true },
            validation: (Rule) => Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'string',
            options: {
                source: 'title',
                mathLength: 96
            },
            codegen: { required: true },
            validation: (Rule) => Rule.required()
        },
        {
            name: 'link',
            title: 'Git link',
            type: 'string'
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true
            },
            codegen: { required: true },
            validation: (Rule) => Rule.required()
        },
        {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{ type: 'image' }]
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
            codegen: { required: true },
            validation: (Rule) => Rule.required()
        }
    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage'
        }
    }
}

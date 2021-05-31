export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'string',
            options: {
                source: 'title',
                mathLength: 96
            }
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true
            }
        },

        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }]
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent'
        }
    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage',
            description: 'body'
        }
    }
}

export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',

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

            validation: (Rule) =>
                Rule.required().custom((slug) => {
                    if (slug.includes(' '))
                        return 'Slug should not contain spaces'
                    if (slug !== slug.toLowerCase())
                        return 'Slug should only be lowercase'
                    return true
                })
        },
        {
            name: 'start',
            title: 'Start date',
            type: 'date',

            validation: (Rule) => Rule.required()
        },
        {
            name: 'end',
            title: 'End date',
            type: 'date'
        },
        {
            name: 'score',
            title: 'Score (out of 10)',
            type: 'number',
            validation: (Rule) => Rule.min(0).max(10)
        },
        {
            name: 'links',
            title: 'Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'href',
                            title: 'URL',
                            type: 'url'
                        },
                        { name: 'name', title: 'Name', type: 'string' }
                    ]
                }
            ]
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true
            },

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

            validation: (Rule) => Rule.required()
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }]
        }
    ],
    preview: {
        select: {
            title: 'title',
            media: 'mainImage'
        }
    }
}

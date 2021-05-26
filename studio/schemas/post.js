export default {
    name: 'post',
    title: 'Post',
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
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
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
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }]
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime'
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
            media: 'mainImage'
        },
        prepare(selection) {
            const { category } = selection
            return Object.assign({}, selection, {
                subtitle: category && `in ${category}`
            })
        }
    }
}

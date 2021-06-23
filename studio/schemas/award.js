export default {
    name: 'award',
    title: 'Award',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date',
            validation: (Rule) => Rule.required()
        }
    ]
}

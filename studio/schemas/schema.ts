import schemaTypes from 'all:part:@sanity/base/schema-type'
import createSchema from 'part:@sanity/base/schema-creator'
import award from './award'
import blockContent from './blockContent'
import category from './category'
import project from './project'

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([category, blockContent, project, award])
})

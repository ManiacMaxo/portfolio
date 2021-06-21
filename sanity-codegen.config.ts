import { SanityCodegenConfig } from 'sanity-codegen'

const config: SanityCodegenConfig = {
    schemaPath: './studio/schemas/schema',
    outputPath: './src/lib/sanity/types.ts'
}

export default config

import { SanityClient } from '@sanity/client'
import { createClient } from 'next-sanity'
import { sanityConfig } from './config'

export const sanityClient = createClient(sanityConfig)

if (!sanityConfig.projectId) {
    throw Error('The Project ID is not set. Check your environment variables.')
}

export const previewClient = createClient({
    ...sanityConfig,
    useCdn: false,
    token: process.env.SANITY_API_TOKEN
})

export const getClient = (preview: boolean): SanityClient =>
    preview ? previewClient : sanityClient

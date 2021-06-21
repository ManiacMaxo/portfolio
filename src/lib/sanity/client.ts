import axios from 'axios'
import { createClient } from 'sanity-codegen'
import { sanityConfig } from './config'
import { Documents } from './types'

export const sanityClient = createClient<Documents>({
    ...sanityConfig,
    fetch: fetch
})

export const previewClient = createClient<Documents>({
    ...sanityConfig,
    previewMode: true,
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
    fetch: fetch
})

export const getClient = (preview: boolean) =>
    preview ? previewClient : sanityClient

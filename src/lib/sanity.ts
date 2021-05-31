import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import {
    createImageUrlBuilder,
    createPreviewSubscriptionHook
} from 'next-sanity'
import { sanityConfig } from './config'

export const imageBuilder = createImageUrlBuilder(sanityConfig)

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const urlForImage = (source: SanityImageSource) =>
    imageBuilder.image(source).auto('format').fit('max')

export const usePreviewSubscription =
    createPreviewSubscriptionHook(sanityConfig)

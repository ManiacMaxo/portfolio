import type {
    SanityReference,
    SanityKeyedReference,
    SanityAsset,
    SanityImage,
    SanityFile,
    SanityGeoPoint,
    SanityBlock,
    SanityDocument,
    SanityImageCrop,
    SanityImageHotspot,
    SanityKeyed
} from 'sanity-codegen'

export type {
    SanityReference,
    SanityKeyedReference,
    SanityAsset,
    SanityImage,
    SanityFile,
    SanityGeoPoint,
    SanityBlock,
    SanityDocument,
    SanityImageCrop,
    SanityImageHotspot,
    SanityKeyed
}

/**
 * Category
 *
 *
 */
export interface Category extends SanityDocument {
    _type: 'category'

    /**
     * Title — `string`
     *
     *
     */
    title?: string

    /**
     * Slug — `string`
     *
     *
     */
    slug?: string

    /**
     * Description — `text`
     *
     *
     */
    description?: string
}

/**
 * Project
 *
 *
 */
export interface Project extends SanityDocument {
    _type: 'project'

    /**
     * Title — `string`
     *
     *
     */
    title: string

    /**
     * Slug — `string`
     *
     *
     */
    slug: string

    /**
     * Git link — `string`
     *
     *
     */
    link?: string

    /**
     * Main image — `image`
     *
     *
     */
    mainImage: {
        _type: 'image'
        asset: SanityAsset
        crop?: SanityImageCrop
        hotspot?: SanityImageHotspot
    }

    /**
     * Images — `array`
     *
     *
     */
    images?: Array<
        SanityKeyed<{
            _type: 'image'
            asset: SanityAsset
            crop?: SanityImageCrop
            hotspot?: SanityImageHotspot
        }>
    >

    /**
     * Body — `blockContent`
     *
     *
     */
    body: BlockContent
}

export type BlockContent = Array<
    | SanityKeyed<SanityBlock>
    | SanityKeyed<{
          _type: 'image'
          asset: SanityAsset
          crop?: SanityImageCrop
          hotspot?: SanityImageHotspot
      }>
>

export type Documents = Category | Project

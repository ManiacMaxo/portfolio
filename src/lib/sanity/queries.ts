import groq from 'groq'

export const indexQuery = groq`
*[_type == "project"] | order(score desc) {
  ...,
}`

export const projectBySlugQuery = groq`
*[_type == "project" && slug == $slug][0] {
  ...,
  "tags": tags[]->title,
  body[] {
    ...,
    markDefs[] {
      ...,
      _type == "internalLink" => {
        ...,
        "slug": @.item->slug,
      }
    }
  }
}`

export const awardsQuery = groq`
*[_type == "award"] {
  ...,
}`

const projectFields = `
  "id": _id,
  title,
  mainImage,
  description,
  "tags": tags[]->title,
  slug,
`

export const indexQuery = `
*[_type == "project"] | order(_updatedAt desc) {
  ${projectFields}
}`

export const projectQuery = `
{
  "project": *[_type == "project" && slug == $slug] | order(_updatedAt desc) | [0] {
    ${projectFields}
  }
}`

export const projectSlugsQuery = `
*[_type == "project" && defined(slug)][].slug
`

export const projectBySlugQuery = `
*[_type == "project" && slug == $slug][0] {
  body,
  ${projectFields}
}`

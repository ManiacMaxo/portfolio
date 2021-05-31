const projectFields = `
  "id": _id,
  title,
  mainImage,
  "body": body[].children,
  "tags": tags[]->title,
  slug,
`

export const indexQuery = `
*[_type == "project"] | order(_updatedAt desc) {
  ${projectFields}
}`

export const projectQuery = `
{
  "project": *[_type == "project" && slug.current == $slug] | order(_updatedAt desc) | [0] {
    ${projectFields}
  }
}`

export const projectSlugsQuery = `
*[_type == "project" && defined(slug.current)][].slug.current
`

export const projectBySlugQuery = `
*[_type == "project" && slug.current == $slug][0] {
  ${projectFields}
}
`

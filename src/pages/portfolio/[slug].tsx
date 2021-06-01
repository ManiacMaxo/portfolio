import { Container, Heading, Stack } from '@chakra-ui/react'
import BlockContent from '@sanity/block-content-to-react'
import { GetStaticPropsContext } from 'next'
import React from 'react'
import { Hero } from '../../components'
import {
    getClient,
    IArticleContent,
    projectBySlugQuery,
    urlForImage
} from '../../lib'

const Project: React.FC<IArticleContent> = ({ title, body }) => {
    return (
        <Stack marginBottom='2rem'>
            <Hero askew>
                <Heading>{title}</Heading>
            </Hero>
            <article>
                <Container>
                    <BlockContent blocks={body} />
                </Container>
            </article>
        </Stack>
    )
}

export const getStaticPaths = async (): Promise<any> => {
    const paths = await getClient(false).fetch(
        `*[_type == "project"] | order(_updatedAt desc) {
            slug,
        }`
    )
    return {
        paths: paths.map((path) => ({
            params: path
        })),
        fallback: true
    }
}

export const getStaticProps = async ({
    params,
    preview = false
}: GetStaticPropsContext): Promise<{ props: IArticleContent }> => {
    const article = await getClient(preview).fetch(projectBySlugQuery, {
        slug: params.slug
    })

    return {
        props: {
            title: article.title,
            body: article.body,
            imgUrl: urlForImage(article.mainImage).url()
        }
    }
}

export default Project

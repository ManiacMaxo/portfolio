/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Container, Heading, Stack } from '@chakra-ui/react'
import BlockContent from '@sanity/block-content-to-react'
import React from 'react'
import { Hero } from '../../components'
import { getClient, projectBySlugQuery } from '../../lib'

interface Props {
    title: string
    body: any
}

const Project: React.FC<Props> = (props) => {
    return (
        <Stack marginBottom='2rem'>
            <Hero askew float='right' bg={'light.secondary.normal'}>
                <Heading>{props.title}</Heading>
            </Hero>
            <section>
                <Container>
                    <BlockContent blocks={props.body} />
                </Container>
            </section>
        </Stack>
    )
}

export const getStaticPaths = async ({ preview = false }): Promise<any> => {
    const paths = await getClient(preview).fetch(
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
}): Promise<any> => {
    const article = await getClient(preview).fetch(projectBySlugQuery, {
        slug: params.slug
    })

    return {
        props: {
            title: article.title,
            body: article.body
        }
    }
}

export default Project

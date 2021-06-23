import { GetStaticPropsContext } from 'next'
import React from 'react'
import { getClient, urlForImage } from '../lib'

interface Props {
    title: string
    body: any
    imgUrl: string
    link: string
    start: Date
    end: Date | string
}

const Project: React.FC<Props> = (props) => {
    return <Layout></Layout>
}

export const getStaticPaths = async (): Promise<any> => {
    const paths = await getClient(false).getAll('project')
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
}: GetStaticPropsContext): Promise<any> => {
    const article = (
        await getClient(preview).getAll('project', `slug == ${params.slug}`)
    )[0]

    return {
        props: {
            title: article.title,
            body: article.body,
            imgUrl: urlForImage(article.mainImage).url(),
            link: article.link,
            start: article.start,
            end: article.end ?? 'ongoing'
        }
    }
}

export default Project

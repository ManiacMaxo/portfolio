import { GetStaticPropsContext } from 'next'
import React from 'react'
import { Layout } from '../components'
import { getClient, indexQuery, projectBySlugQuery, urlForImage } from '../lib'

interface Props {
    title: string
    body: any
    imgUrl: string
    link: string
    start: Date
    end: string
}

const Project: React.FC<Props> = (_props) => {
    return <Layout></Layout>
}

export const getStaticPaths = async (): Promise<any> => {
    const paths = await getClient(false).fetch(indexQuery)
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
    const articles = await getClient(preview).fetch(projectBySlugQuery, {
        slug: params.slug
    })

    console.log(articles)

    // return {
    //     props: {
    //         title: article.title,
    //         body: article.body,
    //         imgUrl: urlForImage(article.mainImage).url(),
    //         link: article.link,
    //         start: new Date(article.start),
    //         end: article.end ?? 'ongoing'
    //     }
    // }
    return { params }
}

export default Project

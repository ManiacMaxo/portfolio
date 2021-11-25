import { ExternalLink, InternalLink, Layout } from '@/components'
import {
    getClient,
    indexQuery,
    IProject,
    projectBySlugQuery,
    urlForImage
} from '@/lib'
import BlockContent from '@sanity/block-content-to-react'
import { GetStaticProps } from 'next'
import React from 'react'

const Project: React.FC<IProject> = (props) => {
    const sectionTitle = 'title text-2xl font-bold mb-2'

    return (
        <Layout>
            <main className='pt-40'>
                <div className='container pb-3 bg-transparent'>
                    <h1 className='font-heading text-[8vw] font-black leading-none'>
                        {props.title}
                    </h1>
                    <span>
                        {props.start} - {props.end}
                    </span>
                </div>
                <section className='container flex flex-col gap-8 pb-24 md:flex-row md:gap-16'>
                    <div className='flex gap-4 md:flex-col'>
                        {props.tags && (
                            <ul>
                                <h3 className={sectionTitle}>Tags</h3>
                                {props.tags
                                    .sort((a, b) => a.localeCompare(b))
                                    .map((tag: string) => (
                                        <li
                                            key={tag}
                                            className='opacity-75 w-max'
                                        >
                                            {tag}
                                        </li>
                                    ))}
                            </ul>
                        )}
                        {props.links && (
                            <ul>
                                <h3 className={sectionTitle}>Links</h3>

                                {props.links.map((link) => (
                                    <li key={link._key}>
                                        <a
                                            href={link.href}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='underlined'
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div>
                        <h3 className={sectionTitle}>About</h3>
                        <BlockContent
                            className='text-base'
                            blocks={props.body}
                            serializers={{
                                marks: {
                                    link: ExternalLink,
                                    internalLink: InternalLink
                                }
                            }}
                        />
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export const getStaticPaths = async (): Promise<any> => {
    const res = await getClient(false).fetch(indexQuery)

    const paths = res.map((path) => ({
        params: path
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({
    params,
    preview = false
}) => {
    const project = await getClient(preview).fetch(projectBySlugQuery, {
        slug: params.slug
    })

    const dateFormat = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        year: 'numeric'
    }).format

    return {
        props: {
            ...project,
            imgUrl: urlForImage(project.mainImage).url(),
            start: dateFormat(new Date(project.start)),
            end: project.end ? dateFormat(new Date(project.end)) : 'ongoing'
        }
    }
}

export default Project

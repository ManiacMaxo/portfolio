import BlockContent from '@sanity/block-content-to-react'
import { GetStaticPropsContext } from 'next'
import React from 'react'
import { ExternalLink, InternalLink, Layout } from '../components'
import { getClient, indexQuery, projectBySlugQuery, urlForImage } from '../lib'

interface Props {
    title: string
    body: any
    imgUrl: string
    links: any[]
    start: string
    end: string
    tags: string[]
}

const Project: React.FC<Props> = (props) => {
    return (
        <Layout>
            <main>
                <div className='hero container'>
                    <h1 className='title'>{props.title}</h1>
                    <span>
                        {props.start} - {props.end}
                    </span>
                </div>
                <section className='project-summary container'>
                    <div className='project-info'>
                        {props.tags?.length > 0 && (
                            <ul className='project-tags'>
                                <h3 className='title'>Tags</h3>
                                {props.tags.map((tag: string) => (
                                    <li key={tag}>{tag}</li>
                                ))}
                            </ul>
                        )}
                        {props.links?.length > 0 && (
                            <ul className='project-links'>
                                <h3 className='title'>Links</h3>

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
                    <div className='project-about'>
                        <h3 className='title'>About</h3>
                        <BlockContent
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
        fallback: true
    }
}

export const getStaticProps = async ({
    params,
    preview = false
}: GetStaticPropsContext): Promise<any> => {
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

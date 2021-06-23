import { GetStaticPropsContext } from 'next'
import React from 'react'
import { Layout } from '../components'
import { getClient, indexQuery, projectBySlugQuery, urlForImage } from '../lib'
import BlockContent from '@sanity/block-content-to-react'
import Link from 'next/link'

interface Props {
    title: string
    body: any
    imgUrl: string
    links: any[]
    start: string
    end: string
    tags: string[]
}

const DOMLink = ({ children, mark }) => {
    return (
        <a
            className='article-link'
            href={mark.href}
            {...(mark.blank
                ? {
                      target: '_blank',
                      rel: 'noopener noreferrer'
                  }
                : null)}
        >
            {children}
        </a>
    )
}

const InternalLink = ({ children, mark }) => {
    return (
        <Link href={`/${mark.slug}`}>
            <a className='article-link'>{children}</a>
        </Link>
    )
}

const serializers = {
    marks: {
        link: DOMLink,
        internalLink: InternalLink
    }
}

const Project: React.FC<Props> = (props) => {
    const dateFormat = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        year: 'numeric'
    })

    const start = dateFormat.format(new Date(props.start))

    const end =
        props.end === 'ongoing'
            ? 'ongoing'
            : dateFormat.format(new Date(props.end))

    return (
        <Layout>
            <main>
                <div className='hero container'>
                    <h1 className='title'>{props.title}</h1>
                    <span>
                        {start} - {end}
                    </span>
                </div>
                <section className='project-summary container'>
                    <div className='project-info'>
                        <ul className='project-tags'>
                            <h3 className='title'>Tags</h3>
                            {props.tags.map((tag: string) => (
                                <li key={tag}>{tag}</li>
                            ))}
                        </ul>
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
                            serializers={serializers}
                        />
                    </div>
                </section>
            </main>
        </Layout>
    )
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
    const project = await getClient(preview).fetch(projectBySlugQuery, {
        slug: params.slug
    })

    return {
        props: {
            title: project.title,
            body: project.body,
            imgUrl: urlForImage(project.mainImage).url(),
            links: project.links,
            start: project.start,
            end: project.end ?? 'ongoing',
            tags: project.tags
        }
    }
}

export default Project

import { GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'
import { ProjectsList, Layout, ScrollProgress, SideScroll } from '../components'
import { getClient, indexQuery, IProject, urlForImage } from '../lib'

interface Props {
    projects: IProject[]
}

const Index: React.FC<Props> = (props) => {
    const numProjects = props.projects.length

    return (
        <Layout>
            <main>
                <SideScroll>
                    {props.projects.map((project) => (
                        <div key={project._id} className='project'>
                            <Link href={`/${project.slug}`}>
                                <a className='title bounce-stretch'>
                                    {project.title}
                                </a>
                            </Link>
                        </div>
                    ))}
                </SideScroll>
            </main>
            <ScrollProgress end={numProjects} />
            <ProjectsList projects={props.projects} />
        </Layout>
    )
}

export const getStaticProps = async ({
    preview = false
}: GetStaticPropsContext): Promise<any> => {
    const res = await getClient(preview).fetch(indexQuery)

    const projects: IProject[] = res.map((project) => ({
        ...project,
        imgUrl: urlForImage(project.mainImage).url()
    }))

    return {
        props: {
            projects
        },
        revalidate: 10 * 60 * 60 // 10 hours
    }
}

export default Index

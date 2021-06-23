import { GetStaticPropsContext } from 'next'
import Link from 'next/link'
import React from 'react'
import { Layout, ScrollProgress, SideScroll } from '../components'
import { getClient, indexQuery, IProject, Project, urlForImage } from '../lib'

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
                        <div key={project.id} className='project'>
                            <Link href={project.href}>
                                <a className='title bounce-stretch'>
                                    {project.name}
                                </a>
                            </Link>
                        </div>
                    ))}
                </SideScroll>
            </main>
            <ScrollProgress end={numProjects} />
        </Layout>
    )
}

export const getStaticProps = async ({
    preview = false
}: GetStaticPropsContext): Promise<any> => {
    const res = await getClient(preview).query(indexQuery)

    const projects: IProject[] = res.map((project: Project) => ({
        id: project._id,
        name: project.title,
        img: urlForImage(project.mainImage).url(),
        href: `/${project.slug}`
    }))

    return {
        props: {
            projects
        },
        revalidate: 10 * 60 * 60 // 10 hours
    }
}

export default Index

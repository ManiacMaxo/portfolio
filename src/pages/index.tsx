import { GetStaticPropsContext } from 'next'
import React from 'react'
import { Button, Hero, Layout } from '../components'
import { getClient, indexQuery, IProject, urlForImage } from '../lib'

interface Props {
    projects: IProject[]
}

const Index: React.FC<Props> = (props) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const numProjects = props.projects.length

    return (
        <Layout>
            <Hero
                title='Building digital experiences'
                subtitle='a Web Developer & Machine Learning enthusiast'
            >
                <div className='input-group'>
                    <input
                        type='email'
                        className='input'
                        placeholder='Email address'
                    />
                    <Button className='btn btn-accent'>Contact Me</Button>
                </div>
            </Hero>
            <main></main>

            {/* <ScrollProgress end={numProjects} /> */}
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

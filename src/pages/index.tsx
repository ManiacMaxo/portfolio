import { motion } from 'framer-motion'
import { GetStaticPropsContext } from 'next'
import React from 'react'
import {
    Button,
    Contact,
    Footer,
    Hero,
    Input,
    Layout,
    Typewriter
} from '../components'
import { getClient, indexQuery, IProject, urlForImage } from '../lib'

interface Props {
    projects: IProject[]
}

const Home: React.FC<Props> = (props) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const numProjects = props.projects.length

    const inputGroup = {
        animate: { opacity: 1 },
        initial: { opacity: 0 }
    }

    return (
        <Layout>
            <Hero
                title='Building digital experiences'
                subtitle={() => (
                    <>
                        a{' '}
                        <Typewriter
                            options={[
                                'Web Developer',
                                'Machine Learning enthusiast',
                                'Linux Sysadmin',
                                'Friendly guy'
                            ]}
                        />
                    </>
                )}
            >
                <motion.div
                    className='flex items-center justify-center gap-4 flex-col md:flex-row'
                    variants={inputGroup}
                >
                    <Input
                        type='email'
                        name='email'
                        placeholder='Email address'
                        variant='filled'
                    />
                    <Button variant='secondary'>Contact Me</Button>
                </motion.div>
            </Hero>
            <main>
                <Contact />
                <Footer />
            </main>
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

export default Home

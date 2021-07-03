import { motion } from 'framer-motion'
import { GetStaticPropsContext } from 'next'
import React from 'react'
import { Button, Hero, Layout } from '../components'
import { getClient, indexQuery, IProject, urlForImage } from '../lib'
import styles from '../styles/pages/Home.module.scss'

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
                subtitle='a Web Developer & Machine Learning enthusiast'
            >
                <motion.div className='input-group' variants={inputGroup}>
                    <input
                        type='email'
                        className='input'
                        placeholder='Email address'
                    />
                    <Button className='btn btn-accent'>Contact Me</Button>
                </motion.div>
            </Hero>
            <main>
                <div className={`${styles.technologies} light`}>
                    <div className='container'>
                        <h1 className='title'>My awesome skills</h1>
                    </div>
                </div>
                <div className={`${styles.projects} container`}></div>
            </main>

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

export default Home

import { motion } from 'framer-motion'
import { GetStaticPropsContext } from 'next'
import React, { useEffect, useState } from 'react'
import { Button, Contact, Hero, Layout } from '../components'
import { getClient, indexQuery, IProject, urlForImage } from '../lib'

interface Props {
    projects: IProject[]
}

const Subtitle: React.FC = () => {
    const options = [
        'Web Developer',
        'Machine Learning enthusiast',
        'Linux Sysadmin'
    ]
    const [index, setIndex] = useState(0)
    const [letterIndex, setLetterIndex] = useState(0)
    const [blink, setBlink] = useState(true)
    const [reverse, setReverse] = useState(false)

    useEffect(() => {
        const blinkTimeout = setTimeout(() => setBlink((prev) => !prev), 500)
        return () => clearTimeout(blinkTimeout)
    }, [blink])

    useEffect(() => {
        if (letterIndex === options[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 2000)
            return
        }

        if (letterIndex === 0 && reverse) {
            setReverse(false)
            setIndex((prev) => (prev + 1 === options.length ? 0 : prev + 1))
            return
        }

        const timeout = setTimeout(
            () => setLetterIndex((prev) => prev + (reverse ? -1 : 1)),
            reverse ? 75 : 100
        )

        return () => clearTimeout(timeout)
    }, [letterIndex, index, reverse])

    return (
        <>
            a{' '}
            <span>
                {options[index].substring(0, letterIndex)}
                {blink && '|'}
            </span>
        </>
    )
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
            <Hero title='Building digital experiences' subtitle={Subtitle}>
                <motion.div className='input-group' variants={inputGroup}>
                    <input
                        type='email'
                        className='input'
                        placeholder='Email address'
                    />
                    <Button variant='secondary'>Contact Me</Button>
                </motion.div>
            </Hero>
            <main>
                <Contact />
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

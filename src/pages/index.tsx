import {
    Button,
    Footer,
    Hero,
    Layout,
    Projects,
    ScrollAction,
    Typewriter
} from '@/components'
import { getClient, indexQuery, IProject, urlForImage } from '@/lib'
import { motion } from 'framer-motion'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

interface Props {
    projects: IProject[]
}

const Home: React.FC<Props> = (props) => {
    const router = useRouter()

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
                        a&nbsp;
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
                    className='flex flex-col items-center justify-center gap-4 md:flex-row'
                    variants={inputGroup}
                >
                    <Button
                        variant='secondary'
                        onClick={() => router.push('/contact')}
                    >
                        Contact Me
                    </Button>
                </motion.div>
            </Hero>
            <ScrollAction />
            <main>
                <Projects {...props} />
                <Footer />
            </main>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const res = await getClient(preview).fetch(indexQuery)

    const projects: IProject[] = res
        .map((project) => ({
            ...project,
            imgUrl: urlForImage(project.mainImage).url(),
            start: new Date(project.start).getFullYear()
        }))
        .sort((a, b) => b.start - a.start)

    return {
        props: { projects },
        revalidate: 10 * 60 * 60 // 10 hours
    }
}

export default Home

import { css } from '@emotion/css'
import classNames from 'classnames'
import { GetStaticPropsContext } from 'next'
import React from 'react'
import { Layout } from '../components'
import { awardsQuery, getClient, IAward } from '../lib'

interface Props {
    awards: Array<IAward>
}

const About: React.FC<Props> = (props) => {
    const awards = props.awards
        .map((award) => ({
            ...award,
            date: new Date(award.date)
        }))
        .sort((a, b) => +(a.date < b.date))

    const sectionHeader = classNames(
        'title relative text-sm pb-2 mb-2 before:absolute after:absolute',
        'before:font-mono before:top-0 before:right-0',
        'after:bottom-0 after:left-0 after:w-full after:h-px after:bg-secondary after:bg-opacity-75',
        css`
            &::before {
                content: counter(section, decimal-leading-zero);
                counter-increment: section;
            }
        `
    )
    const section = 'flex flex-col gap-4 text-sm'

    const contentCounter = css`
        counter-reset: section;
    `

    return (
        <Layout title='About | Victor Gorchilov' light>
            <main className='bg-conic-gradient from-primary-500 to-secondary bg-fixed'>
                <div className='container min-h-screen grid items-center grid-cols-3 lg:grid-cols-2'>
                    <div
                        className={`${contentCounter} flex flex-col gap-8 bg-primary-800 p-4 justify-self-end sm:w-96 col-span-3 sm:col-span-2 lg:col-auto`}
                    >
                        <header>
                            <h1 className='title text-3xl'>Victor Gorchilov</h1>
                            <p className='text-xs uppercase text-secondary text-opacity-75'>
                                <span className='text-secondary'>
                                    Web Development
                                </span>{' '}
                                (interface design and human interaction),{' '}
                                <span className='text-secondary'>
                                    Deep Learning
                                </span>{' '}
                                (mimicing the human brain) and{' '}
                                <span className='text-secondary'>
                                    Tinkering
                                </span>
                            </p>
                        </header>
                        <section className={section}>
                            <h2 className={sectionHeader}>About</h2>
                            <p>
                                I am a student, actively learning{' '}
                                <strong>UI</strong> and <strong>UX</strong> as
                                well as implementing algorithms in the field of{' '}
                                <strong>AI</strong>.
                            </p>
                            <p>
                                Having studied in TUES, I apply my knowledge in
                                embedded systems and low-level high-performant
                                code to tinker and create intereseting projects.
                            </p>
                            <p>
                                I love strength training, e-sports and
                                especially snowboarding. My passions allow me to
                                recover from programming and studying.
                            </p>
                        </section>
                        <section className={section}>
                            <h2 className={sectionHeader}>Fields</h2>
                            <ul>
                                <li>UI/UX</li>
                                <li>Backend</li>
                                <li>Deep Learning</li>
                                <li>Embedded</li>
                                <li>Linux Sysadmin</li>
                            </ul>
                        </section>
                        <section className={section}>
                            <h2 className={sectionHeader}>Awards</h2>
                            <ul>
                                {awards.map((award) => (
                                    <li
                                        key={award._id}
                                        className='flex items-center justify-between w-full'
                                    >
                                        <span>{award.name}</span>
                                        <span className='font-mono text-secondary text-opacity-75'>
                                            {award.date.getFullYear()}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    <div className='hidden sm:block select-none'>
                        <h1 className='title text-9xl text-primary-800 w-max transform rotate-90 translate-x-[-40%]'>
                            About
                        </h1>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export const getStaticProps = async ({
    preview = false
}: GetStaticPropsContext): Promise<{ props: Props }> => {
    const awards = await getClient(preview).fetch(awardsQuery)

    return {
        props: { awards }
    }
}

export default About

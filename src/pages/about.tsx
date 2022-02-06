import { Layout } from '@/components'
import { awardsQuery, getClient, IAward } from '@/lib'
import classNames from 'classnames'
import { GetStaticProps } from 'next'
import React from 'react'

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
        'before:content-[counter(section,decimal-leading-zero)] [counter-increment:section]'
    )
    const section = 'flex flex-col gap-4 text-sm'

    return (
        <Layout title='About | Victor Gorchilov'>
            <main>
                <div className='container grid items-center min-h-screen grid-cols-3 lg:grid-cols-2'>
                    <div
                        className={`[counter-reset: section] flex flex-col gap-8 p-4 justify-self-end sm:w-96 col-span-3 sm:col-span-2 lg:col-auto`}
                    >
                        <header>
                            <h1 className='text-3xl title'>Victor Gorchilov</h1>
                            <p className='text-xs text-opacity-75 uppercase text-secondary'>
                                <span className='text-secondary'>
                                    Web Development
                                </span>
                                &nbsp; (interface design and human
                                interaction),&nbsp;
                                <span className='text-secondary'>
                                    Deep Learning
                                </span>
                                &nbsp; (mimicing the human brain) and&nbsp;
                                <span className='text-secondary'>
                                    Tinkering
                                </span>
                            </p>
                        </header>
                        <section className={section}>
                            <h2 className={sectionHeader}>About</h2>
                            <p>
                                I am a student, actively learning&nbsp;
                                <strong>UI</strong> and <strong>UX</strong> as
                                well as implementing algorithms in the field
                                of&nbsp;
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
                                        <span className='font-mono text-opacity-75 text-secondary'>
                                            {award.date.getFullYear()}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    <div className='hidden select-none sm:block'>
                        <h1 className='title text-9xl text-primary-800 w-max transform rotate-90 translate-x-[-40%]'>
                            About
                        </h1>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const awards = await getClient(preview).fetch(awardsQuery)

    return {
        props: { awards }
    }
}

export default About

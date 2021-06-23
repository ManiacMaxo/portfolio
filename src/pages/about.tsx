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

    return (
        <Layout title='About | Victor Gorchilov' light>
            <main className='about-page'>
                <div className='container'>
                    <div className='about-content'>
                        <header>
                            <h1 className='title'>Victor Gorchilov</h1>
                            <span className='about-subtitle'>
                                <span>Web Development</span> (interface design
                                and human interaction),{' '}
                                <span>Deep Learning</span> (mimicing the human
                                brain) and <span>Tinkering</span>
                            </span>
                        </header>
                        <section>
                            <h2 className='section-header title'>About</h2>
                            <p>
                                Victor is a student, actively learning{' '}
                                <strong>UI</strong> and <strong>UX</strong> as
                                well as implementing algorithms in the field of{' '}
                                <strong>AI</strong>.
                            </p>
                            <p>
                                Having studied in TUES, he applies his knowledge
                                in embedded systems and low-level
                                high-performant code to tinker and create
                                intereseting projects.
                            </p>
                            <p>
                                Victor loves strength training, Esports and
                                especially snowboarding. His passions allow him
                                to recover from programming and studying.
                            </p>
                        </section>
                        <section>
                            <h2 className='section-header title'>Fields</h2>
                            <ul className='about-fields'>
                                <li>UI/UX</li>
                                <li>Backend</li>
                                <li>Deep Learning</li>
                                <li>Embedded</li>
                                <li>Linux Sysadmin</li>
                            </ul>
                        </section>
                        <section>
                            <h2 className='section-header title'>Awards</h2>
                            <ul className='about-awards'>
                                {awards.map((award) => (
                                    <li key={award._id} className='award'>
                                        <span className='award-name'>
                                            {award.name}
                                        </span>
                                        <span className='award-year'>
                                            {award.date.getFullYear()}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    <div className='about-header'>
                        <h1 className='title'>About</h1>
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

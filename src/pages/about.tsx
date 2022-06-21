import { Layout } from '@/components'
import { awardsQuery, getClient, IAward } from '@/lib'
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

    return (
        <Layout title='About | Victor Gorchilov'>
            <main>
                <header>
                    <h1>Victor Gorchilov</h1>
                    <p>
                        <span>Web Development</span>
                        &nbsp; (interface design and human interaction),&nbsp;
                        <span>Deep Learning</span>
                        &nbsp; (mimicing the human brain) and&nbsp;
                        <span>Tinkering</span>
                    </p>
                </header>
                <section>
                    <h2>About</h2>
                    <p>
                        I am a student, actively learning&nbsp;
                        <strong>UI</strong> and <strong>UX</strong> as well as
                        implementing algorithms in the field of&nbsp;
                        <strong>AI</strong>.
                    </p>
                    <p>
                        Having studied in TUES, I apply my knowledge in embedded
                        systems and low-level high-performant code to tinker and
                        create intereseting projects.
                    </p>
                    <p>
                        I love strength training, e-sports and especially
                        snowboarding. My passions allow me to recover from
                        programming and studying.
                    </p>
                </section>
                <section>
                    <h2>Fields</h2>
                    <ul>
                        <li>UI/UX</li>
                        <li>Backend</li>
                        <li>Deep Learning</li>
                        <li>Embedded</li>
                        <li>Linux Sysadmin</li>
                    </ul>
                </section>
                <section>
                    <h2>Awards</h2>
                    <ul>
                        {awards.map((award) => (
                            <li key={award._id}>
                                <span>{award.name}</span>
                                <span>{award.date.getFullYear()}</span>
                            </li>
                        ))}
                    </ul>
                </section>
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

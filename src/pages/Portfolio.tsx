import { Container, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import { Article, Hero } from '../components'

const Portfolio: React.FC = () => {
    return (
        <Stack>
            <Hero askew float='right' bg={'light.secondary.normal'}>
                <Heading>Portfolio</Heading>
            </Hero>
            <section>
                <Container>
                    <Article
                        heading='Bagun'
                        img='https://storage.gorchilov.net/images/bagun/logo.png'
                        href='/portfolio/bagun'
                        tags={['ReactJS', 'NextJS', 'Esports']}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laboriosam tempore, beatae, sapiente dolore id quisquam
                        saepe totam, repellendus cupiditate ipsum mollitia error
                        suscipit eum. Aspernatur quas mollitia reprehenderit rem
                        ipsa.
                    </Article>
                </Container>
            </section>
        </Stack>
    )
}

export default Portfolio

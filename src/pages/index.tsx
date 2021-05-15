import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { ArticleGrid, Hero } from '../components'
import { IArticle } from '../lib'

const Home: React.FC = () => {
    const projects: IArticle[] = [
        {
            title: 'Bagun',
            description: 'a short summary',
            img: '/favicon.ico',
            url: '/'
        },
        {
            title: 'Discord',
            description: 'a short summary',
            img: '/favicon.ico',
            url: '/'
        },
        {
            title: 'Covid Tracker',
            description: 'a short summary',
            img: '/favicon.ico',
            url: '/'
        }
    ]

    return (
        <Stack>
            <Hero
                askew
                textTransform='uppercase'
                fontSize='2rem'
                lineHeight='0.8'
            >
                <Text>Hey!</Text>
                <Heading fontSize='1.5em'>I'm Victor</Heading>
                <Box
                    width='3.5rem'
                    height='0.5rem'
                    bg='currentColor'
                    marginBottom='1rem'
                />
                <Text
                    fontFamily='secondary'
                    textTransform='initial'
                    w='500px'
                    maxW='100%'
                    lineHeight='1em'
                >
                    Web developer and Machine Learning enthusiast
                </Text>
            </Hero>
            <div>
                <Container>
                    <ArticleGrid articles={projects} />
                </Container>
            </div>
        </Stack>
    )
}

export default Home

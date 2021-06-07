import { Box, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Hero, Typewriter } from '../components'

const Home: React.FC = () => {
    return (
        <Stack>
            <Hero
                askew
                textTransform='uppercase'
                fontSize='2rem'
                lineHeight='0.8'
            >
                <Text>Hey!</Text>
                <Typewriter
                    as='h1'
                    fontSize='1.5em'
                    color='textInverted'
                    backgroundColor='primary'
                    speed={3}
                >
                    I&apos;m Victor
                </Typewriter>
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
        </Stack>
    )
}

export default Home

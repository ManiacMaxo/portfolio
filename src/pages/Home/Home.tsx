import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Hero } from '../../components'

interface Props {}

const Home: React.FC<Props> = () => {
    return (
        <Stack>
            <Hero
                askew
                textTransform='uppercase'
                fontSize='2rem'
                lineHeight='0.8'
                color='white'
            >
                <Text>Hey!</Text>
                <Heading fontSize='1.5em'>I'm Victor</Heading>
                <Box
                    width='3rem'
                    height='0.5rem'
                    bg='white'
                    marginBottom='1rem'
                />
                <Text fontFamily='secondary' textTransform='initial'>
                    Welcome to my page
                </Text>
            </Hero>
        </Stack>
    )
}

export default Home

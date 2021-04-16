import { Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import { Breadcrumb, Hero } from '../components'
import { Route } from '../lib'

const About: React.FC = () => {
    return (
        <Stack>
            <Hero>
                <Heading>Who am I?</Heading>
                <Breadcrumb
                    items={[new Route('Home', '/'), new Route('About')]}
                />
            </Hero>
            <p>About page</p>
        </Stack>
    )
}

export default About

import { Heading } from '@chakra-ui/react'
import React from 'react'
import { Hero } from '../../components'

interface Props {}

const Home: React.FC<Props> = () => {
    return (
        <div>
            <Hero askew>
                <Heading textAlign='center'>Hello! I am Victor</Heading>
            </Hero>
        </div>
    )
}

export default Home

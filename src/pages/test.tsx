import { Center } from '@chakra-ui/layout'
import React from 'react'
import { Typewriter } from '../components'

const Test: React.FC = () => {
    return (
        <Center h='80vh'>
            <Typewriter as='h1' fontSize='1.5em' color='red'>
                Hello, I&apos;m Victor
            </Typewriter>
        </Center>
    )
}

export default Test

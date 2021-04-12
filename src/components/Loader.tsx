import React from 'react'
import { Center } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/spinner'

const Loader: React.FC = () => {
    return (
        <Center paddingTop='300px' minHeight='inherit'>
            <Spinner size='lg' />
        </Center>
    )
}

export { Loader }

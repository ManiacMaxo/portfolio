import { Heading, Text } from '@chakra-ui/layout'
import { Center, Icon, Stack } from '@chakra-ui/react'
import React from 'react'
import { IoHammer } from 'react-icons/io5'

const WIP: React.FC = () => {
    return (
        <Center minH='inherit' h='100%'>
            <Stack alignItems='center'>
                <Text fontFamily='secondary'>The page is</Text>
                <Heading as='h1' size='2xl' textTransform='uppercase'>
                    under construction
                </Heading>
                <Icon as={IoHammer} w={10} h={10} />
            </Stack>
        </Center>
    )
}

export { WIP }

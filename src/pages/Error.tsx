import { Center, Divider, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { errors } from '../constants'

interface Props {
    code: number
}

const Error: React.FC<Props> = (props) => {
    return (
        <Center
            position='absolute'
            top='35%'
            left='50%'
            transform='translate(-50%)'
            h='50px'
        >
            <Heading>{props.code}</Heading>
            <Divider
                orientation='vertical'
                mx='0.3rem'
                borderColor='gray.500'
            />
            <Text>{errors.get(props.code)}</Text>
        </Center>
    )
}

export default Error

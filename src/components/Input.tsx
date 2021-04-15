import { Input as ChakraInput } from '@chakra-ui/react'
import { As, ChakraProps, useColorModeValue } from '@chakra-ui/system'
import React from 'react'

interface Props {
    name?: string
    placeholder?: string
    type?: string
    chakraProps?: ChakraProps
    as?: As<any> | undefined
}

const Input: React.FC<Props> = (props) => {
    const focusColor = useColorModeValue('light.primary', 'dark.primary')

    return (
        <ChakraInput
            as={props.as ? props.as : 'input'}
            placeholder={props.placeholder ?? props.name}
            type={props.type}
            focusBorderColor={focusColor}
            {...props.chakraProps}
        />
    )
}

export { Input }

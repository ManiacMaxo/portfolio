import { Input as ChakraInput, InputProps } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/system'
import React from 'react'

interface Props extends InputProps {
    name?: string
    placeholder?: string
    type?: string
}

const Input: React.FC<Props> = (props) => {
    const focusColor = useColorModeValue('light.primary', 'dark.primary')

    return (
        <ChakraInput
            placeholder={props.placeholder ?? props.name}
            focusBorderColor={focusColor}
            {...props}
        />
    )
}

export { Input }

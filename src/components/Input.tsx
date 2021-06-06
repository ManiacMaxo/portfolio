import { Input as ChakraInput, InputProps } from '@chakra-ui/react'
import React from 'react'

interface Props extends InputProps {
    name?: string
    placeholder?: string
    type?: string
}

const Input: React.FC<Props> = (props) => {
    return (
        <ChakraInput
            placeholder={props.placeholder ?? props.name}
            focusBorderColor='primary'
            {...props}
        />
    )
}

export { Input }

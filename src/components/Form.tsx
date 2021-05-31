import {
    Button,
    Center,
    ChakraProps,
    Container,
    Heading
} from '@chakra-ui/react'
import React from 'react'

interface Props {
    heading?: any
    chakraProps?: ChakraProps
    rest: any
}

const Form: React.FC<Props> = (props) => {
    return (
        <Container maxWidth='700px' {...props.chakraProps}>
            <form {...props.rest}>
                {props.heading && (
                    <Heading textAlign='center' marginBottom='1rem'>
                        {props.heading}
                    </Heading>
                )}
                {props.children}
                <Center>
                    <Button type='submit' bg='light.primary' color='white'>
                        Submit
                    </Button>
                </Center>
            </form>
        </Container>
    )
}

export { Form }

import {
    Box,
    Button,
    Center,
    ChakraProps,
    Container,
    Heading
} from '@chakra-ui/react'
import React from 'react'

interface Props extends ChakraProps {
    heading?: any
    action?: string
    method?: string
    encType?: string
}

const Form: React.FC<Props> = (props) => {
    return (
        <Container maxWidth='700px'>
            <Box as='form' {...props}>
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
            </Box>
        </Container>
    )
}

export { Form }

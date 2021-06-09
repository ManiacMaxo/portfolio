import {
    Box,
    Button,
    Center,
    ChakraProps,
    Container,
    Heading,
    useToast
} from '@chakra-ui/react'
import React, { FormEvent } from 'react'

interface Props extends ChakraProps {
    heading?: any
    action?: string
    method?: string
    encType?: string
}

const Form: React.FC<Props> = (props) => {
    const toast = useToast()
    const onSubmit = (event: FormEvent) => {
        event.preventDefault()

        toast({
            position: 'top-right',
            title: 'Error',
            description: 'Feature is not implemented',
            status: 'error',
            duration: 5000,
            isClosable: true
        })
    }

    return (
        <Container maxWidth='700px'>
            <Box as='form' {...props} onSubmit={onSubmit}>
                {props.heading && (
                    <Heading textAlign='center' marginBottom='1rem'>
                        {props.heading}
                    </Heading>
                )}
                {props.children}
                <Center>
                    <Button
                        type='submit'
                        bg='primary'
                        color='white'
                        paddingInline='1.5rem'
                    >
                        Submit
                    </Button>
                </Center>
            </Box>
        </Container>
    )
}

export { Form }

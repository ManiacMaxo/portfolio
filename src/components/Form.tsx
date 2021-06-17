import {
    Button,
    ChakraProps,
    Container,
    Heading,
    Stack
} from '@chakra-ui/react'
import React, { FormEvent } from 'react'

interface Props extends ChakraProps {
    heading?: any
    callback?: (event: FormEvent) => void
}

const Form: React.FC<Props> = (props) => {
    const onSubmit = (event: FormEvent) => {
        event.preventDefault()
        props.callback(event)
    }

    return (
        <Container maxWidth='700px'>
            <Stack
                as='form'
                {...props}
                onSubmit={onSubmit}
                spacing='1.5'
                alignItems='center'
            >
                {props.heading && (
                    <Heading
                        fontWeight='black'
                        marginBottom='1rem'
                        letterSpacing='0.125em'
                        fontSize='4xl'
                    >
                        {props.heading}
                    </Heading>
                )}
                <div>{props.children}</div>
                <Button
                    type='submit'
                    bg='primary'
                    color='white'
                    paddingInline='1.5rem'
                >
                    Submit
                </Button>
            </Stack>
        </Container>
    )
}

export { Form }

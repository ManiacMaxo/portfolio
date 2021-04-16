import {
    Button,
    Center,
    ChakraProps,
    Container,
    Heading
} from '@chakra-ui/react'
import React from 'react'

interface Props {
    heading?: JSX.Element
    chakraProps?: ChakraProps
}

const Form: React.FC<Props> = (props) => {
    return (
        <Container
            as='form'
            maxWidth='700px'
            {...props.chakraProps}
            onSubmit={(e: any) => e.preventDefault()}
        >
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
        </Container>
    )
}

export { Form }

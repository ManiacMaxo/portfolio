import {
    Button,
    Center,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Stack,
    Textarea
} from '@chakra-ui/react'
import React from 'react'
import { Input } from '.'

interface Props {
    heading?: JSX.Element
}

const Form: React.FC<Props> = (props) => {
    return (
        <Container
            as='form'
            // marginBottom='1rem'
            // maxWidth='700px'
            onSubmit={(e: any) => e.preventDefault()}
        >
            {props.heading && (
                <Heading textAlign='center' marginBottom='1rem'>
                    {props.heading}
                </Heading>
            )}
            <Stack direction='row' marginBottom='0.5rem'>
                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input type='email' />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Subject</FormLabel>
                    <Input />
                </FormControl>
            </Stack>
            <FormControl>
                <FormLabel>Comments</FormLabel>
                <Input as={Textarea} />
            </FormControl>
            <Center>
                <Button type='submit' bg='light.primary' color='white'>
                    Submit
                </Button>
            </Center>
        </Container>
    )
}

export { Form }

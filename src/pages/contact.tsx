import {
    Avatar,
    Box,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Image,
    Stack,
    Text,
    Textarea,
    useColorModeValue,
    Wrap
} from '@chakra-ui/react'
import React from 'react'
import { Breadcrumb, Form, Hero, Input } from '../components'
import { addresses } from '../lib/constants'
import { Route } from '../lib'

const Contact: React.FC = () => {
    const bg = useColorModeValue('light.secondary.dark', 'dark.secondary')

    return (
        <Stack d='column' spacing='3rem' marginBottom='1rem'>
            <Hero bg={bg}>
                <Heading>Contact me</Heading>
                <Breadcrumb
                    items={[
                        new Route('Home', '/'),
                        new Route('About'),
                        new Route('Contact')
                    ]}
                />
            </Hero>
            <section>
                <Container>
                    <Wrap justify='center' spacing='1rem'>
                        {addresses.map((address) => (
                            <Box
                                key={address.name}
                                w='350px'
                                borderWidth='1px'
                                borderRadius='10px'
                                boxShadow='5px 7px 5px rgba(0,0,0,.1)'
                                overflow='hidden'
                            >
                                <Image src={address.cover} w='100%' h='75px' />
                                <Avatar
                                    src={address.icon}
                                    transform='translateY(-50%)'
                                    display='block'
                                    m='0 auto -25px'
                                />
                                <Stack spacing='0.2rem' p='0 1rem 0.5rem'>
                                    <Heading fontSize='1.5rem'>
                                        {address.name}
                                    </Heading>
                                    <div>
                                        <Text
                                            d='inline-block'
                                            marginRight='0.3em'
                                        >
                                            Email:
                                        </Text>
                                        <a href={`mailto: ${address.mail}`}>
                                            {address.mail}
                                        </a>
                                    </div>
                                    <div>
                                        <Text
                                            d='inline-block'
                                            marginRight='0.3em'
                                        >
                                            Phone:
                                        </Text>
                                        {address.phone ? (
                                            <a href={`tel:${address.phone}`}>
                                                {address.phone}
                                            </a>
                                        ) : (
                                            '-'
                                        )}
                                    </div>
                                </Stack>
                            </Box>
                        ))}
                    </Wrap>
                </Container>
            </section>
            <section>
                <Form
                    heading='Get in touch'
                    rest={{
                        action: 'mailto:victor@gorchilov.com',
                        method: 'POST',
                        enctype: 'multipart/form-data'
                    }}
                >
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
                </Form>
            </section>
        </Stack>
    )
}

export default Contact

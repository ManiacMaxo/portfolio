import {
    Avatar,
    Box,
    Container,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Stack,
    Textarea,
    Wrap
} from '@chakra-ui/react'
import React from 'react'
import { Breadcrumb, Form, Hero, Input } from '../components'
import { Route } from '../lib'
import { addresses } from '../lib/constants'

const Contact: React.FC = () => {
    return (
        <Stack d='column' spacing='3rem' marginBottom='1rem'>
            <Hero bg='secondary.dark'>
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
                                <Box
                                    w='100%'
                                    h='80px'
                                    backgroundImage={address.cover}
                                    backgroundSize='cover'
                                    backgroundPosition='center'
                                />
                                <Avatar
                                    src={address.icon}
                                    transform='translateY(-50%)'
                                    display='block'
                                    m='0 auto -30px'
                                    size='xl'
                                />
                                <Stack spacing='0.2rem' p='0 1rem 0.5rem'>
                                    <Flex alignItems='flex-end'>
                                        <Heading
                                            fontSize='1.5rem'
                                            marginInlineEnd='0.5rem'
                                        >
                                            {address.name}
                                        </Heading>
                                        <span>{address.location}</span>
                                    </Flex>
                                    <span>
                                        Email:{' '}
                                        <a href={`mailto:${address.mail}`}>
                                            {address.mail}
                                        </a>
                                    </span>
                                    <span>
                                        Phone:{' '}
                                        {address.phone ? (
                                            <a href={`tel:${address.phone}`}>
                                                {address.phone}
                                            </a>
                                        ) : (
                                            '-'
                                        )}
                                    </span>
                                </Stack>
                            </Box>
                        ))}
                    </Wrap>
                </Container>
            </section>
            <section>
                <Container>
                    <Form
                        heading='Get in touch'
                        method='POST'
                        action='/api/email'
                    >
                        <Stack direction='row' marginBottom='0.5rem'>
                            <FormControl isRequired>
                                <FormLabel>Name</FormLabel>
                                <Input name='name' placeholder='' />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input
                                    type='email'
                                    name='email'
                                    placeholder=''
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Subject</FormLabel>
                                <Input name='subject' placeholder='' />
                            </FormControl>
                        </Stack>
                        <FormControl>
                            <FormLabel>Comments</FormLabel>
                            <Input
                                as={Textarea}
                                name='content'
                                placeholder=''
                            />
                        </FormControl>
                    </Form>
                </Container>
            </section>
        </Stack>
    )
}

export default Contact

import {
    Avatar,
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Container,
    Heading,
    Image,
    Input,
    Stack,
    Textarea,
    Wrap
} from '@chakra-ui/react'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { Hero } from '../components'

interface Props {}

const Contact: React.FC<Props> = () => {
    const addresses = [
        {
            name: 'Personal',
            location: 'home',
            phone: '+359884866981',
            mail: 'victor@gorchilov.com',
            icon: ''
        },
        {
            name: 'School',
            location: 'ELSYS',
            phone: '',
            mail: 'viktor.n.gorchilov.2016@elsys-bg.org',
            icon: ''
        }
    ]

    return (
        <Stack d='column' spacing='3rem'>
            <Hero color='white' bg='light.secondary.dark'>
                <Heading>Contact me</Heading>
                <Breadcrumb separator={<BiChevronRight />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/about'>About</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage fontWeight='bold'>
                        <BreadcrumbLink>Contact</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
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
                                <Image
                                    src='https://via.placeholder.com/150'
                                    w='100%'
                                    h='75px'
                                />
                                <Avatar
                                    src={address.icon}
                                    transform='translateY(-50%)'
                                    display='block'
                                    margin='0 auto'
                                />
                                <Stack spacing='0.2rem' p='0 1rem 0.5rem'>
                                    <Heading fontSize='1.5rem'>
                                        {address.name}
                                    </Heading>
                                    <a href={`mailto: ${address.mail}`}>
                                        {address.mail}
                                    </a>
                                    {address.phone ? (
                                        <a href={`tel:${address.phone}`}>
                                            {address.phone}
                                        </a>
                                    ) : (
                                        <span>-</span>
                                    )}
                                </Stack>
                            </Box>
                        ))}
                    </Wrap>
                </Container>
            </section>
            <section>
                <Container as='form' marginBottom='1rem'>
                    <Heading textAlign='center' marginBottom='1rem'>
                        Want a website? <br /> Just contact me
                    </Heading>
                    <Stack direction='row' marginBottom='0.5rem'>
                        <Input placeholder='Name*' required />
                        <Input placeholder='Email*' required />
                        <Input placeholder='Subject*' required />
                    </Stack>
                    <Textarea placeholder='Comments' />
                    <Button
                        type='submit'
                        color='light.secondary.normal'
                        // _hover={{ bg: 'light.secondary.light' }}
                    >
                        Submit
                    </Button>
                </Container>
            </section>
        </Stack>
    )
}

export default Contact

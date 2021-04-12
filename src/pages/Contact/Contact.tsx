import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Container,
    Heading,
    Input,
    Stack,
    Table,
    Tbody,
    Td,
    Textarea,
    Th,
    Thead,
    Tr
} from '@chakra-ui/react'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { Hero } from '../../components'

interface Props {}

const Contact: React.FC<Props> = () => {
    return (
        <Stack d='column' spacing='3rem'>
            <Hero color='white' bg='light.secondary'>
                <Heading>Contact me</Heading>
                <Breadcrumb separator={<BiChevronRight />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>About</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage fontWeight='bold'>
                        <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Hero>
            <Box>
                <Container>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Addess</Th>
                                <Th>Phone</Th>
                                <Th>Email</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Sofia, Bulgaria</Td>
                                <Td>+359 88 486 6981</Td>
                                <Td>victor@gorchilov.com</Td>
                            </Tr>
                            <Tr>
                                <Td>ELSYS Sofia</Td>
                                <Td>-</Td>
                                <Td>viktor.n.gorchilov.2016@elsys-bg.org</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Container>
            </Box>
            <Box>
                <Container>
                    <Heading textAlign='center' marginBottom='1rem'>
                        Have a project? <br /> Let's work together
                    </Heading>
                    <Stack direction='row' marginBottom='0.5rem'>
                        <Input placeholder='Name*' required />
                        <Input placeholder='Email*' required />
                        <Input placeholder='Subject*' required />
                    </Stack>
                    <Textarea placeholder='Comments' />
                </Container>
            </Box>
        </Stack>
    )
}

export default Contact

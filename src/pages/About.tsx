import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
    Stack
} from '@chakra-ui/react'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { Hero } from '../components'

const About: React.FC = () => {
    return (
        <Stack>
            <Hero>
                <Heading>Who am I?</Heading>
                <Breadcrumb separator={<BiChevronRight />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage fontWeight='bold'>
                        <BreadcrumbLink>About</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Hero>
            <p>About page</p>
        </Stack>
    )
}

export default About

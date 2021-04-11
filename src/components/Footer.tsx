import { Container, Flex, Text } from '@chakra-ui/layout'
import { Box, Link as ChakraLink, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '.'
import { routes, socials } from '../constants'

interface Props {}

const Footer: React.FC<Props> = () => {
    const bg = useColorModeValue('light.dark', 'dark.primary')
    const color = useColorModeValue('light.textInverted', 'dark.textInverted')
    const colorHover = useColorModeValue('light.hover', 'dark.hover')

    return (
        <Box as='footer' h='footerHeight' bg={bg} color={color}>
            <Container
                d='flex'
                flexDir='column'
                alignItems='center'
                justifyContent='space-between'
                py='2.5%'
            >
                <Logo />
                <Flex as='nav'>
                    {routes.map(({ name, href }) => (
                        <ChakraLink
                            as={Link}
                            key={name}
                            to={href}
                            px='1.5rem'
                            _hover={{ color: colorHover }}
                        >
                            {name}
                        </ChakraLink>
                    ))}
                </Flex>
                <Flex>
                    {socials.map((social) => (
                        <ChakraLink
                            as='a'
                            key={social.name}
                            variant='outline'
                            href={social.href}
                            mx='0.4rem'
                        >
                            {social.icon}
                        </ChakraLink>
                    ))}
                </Flex>
                <Text>
                    Copyright &copy; {new Date().getFullYear()} Victor
                    Gorchilov. All rights reserved.
                </Text>
            </Container>
        </Box>
    )
}

export { Footer }

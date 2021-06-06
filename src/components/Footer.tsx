import { Container, Text } from '@chakra-ui/layout'
import { Box, Link as ChakraLink, Stack } from '@chakra-ui/react'
import React from 'react'
import { Logo } from '.'
import { socials } from '../lib/constants'

const Footer: React.FC = () => {
    return (
        <Box
            as='footer'
            minHeight='footerHeight'
            bg='dark'
            color='textInverted'
        >
            <Container
                as={Stack}
                direction={{ base: 'column', md: 'row' }}
                alignItems='center'
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
                py={4}
            >
                <Logo />
                <Text align='center'>
                    &copy; {new Date().getFullYear()} Victor Gorchilov. All
                    rights reserved
                </Text>
                <Stack direction='row' spacing={3}>
                    {socials.map((social) => (
                        <ChakraLink
                            as='a'
                            key={social.name}
                            variant='outline'
                            href={social.href}
                        >
                            {social.icon}
                        </ChakraLink>
                    ))}
                </Stack>
            </Container>
        </Box>
    )
}

export { Footer }

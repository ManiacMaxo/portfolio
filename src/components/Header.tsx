import { Container, Stack } from '@chakra-ui/layout'
import {
    Box,
    IconButton,
    Link as ChakraLink,
    useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import { BiMenuAltRight, BiSearch } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import { Logo } from '.'
import { routes } from '../constants'
import { useWindowScroll } from '../hooks'

const Header: React.FC = () => {
    const colorHover = useColorModeValue('light.hover', 'dark.hover')
    // const color = useColorModeValue('light.textInverted', 'dark.text')

    const { scrollY } = useWindowScroll()

    return (
        <Box
            as='header'
            w='100vw'
            position='fixed'
            zIndex='20'
            h='headerHeight'
            style={{
                backdropFilter: 'blur(5px)'
            }}
            bg={scrollY ? 'rgba(255, 255, 255, 0.45)' : undefined}
            transition='all 0.1s linear'
        >
            <Container
                display='flex'
                justifyContent='space-between'
                alignItems='center'
            >
                <Logo />
                <Stack
                    direction='row'
                    as='nav'
                    justifyContent='space-between'
                    alignItems='center'
                    h='100%'
                    spacing='0.7rem'
                >
                    {routes.map(({ name, href }) => (
                        <ChakraLink
                            as={NavLink}
                            exact
                            activeStyle={{ fontWeight: 'bold' }}
                            to={href}
                            key={name}
                            textTransform='uppercase'
                            _hover={{ color: colorHover }}
                            _focus={{ color: colorHover }}
                        >
                            {name}
                        </ChakraLink>
                    ))}
                </Stack>
                <Box fontSize='1.2em'>
                    <IconButton
                        icon={<BiSearch />}
                        variant='circle'
                        aria-label='search'
                        isRound
                        marginRight='0.4rem'
                    />
                    <IconButton
                        icon={<BiMenuAltRight />}
                        variant='circle'
                        aria-label='menu'
                        isRound
                    />
                </Box>
            </Container>
        </Box>
    )
}

export { Header }

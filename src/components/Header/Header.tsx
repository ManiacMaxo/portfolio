import { Container, Flex } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/react'
import React from 'react'
import { Logo, NavLink } from '..'
import { useWindowScroll } from '../../hooks'
import { routes } from '../../lib/constants'
import { HeaderMenu } from './HeaderMenu'
import { Search } from './Search'

const Header: React.FC = () => {
    const { scrollY } = useWindowScroll()

    const navRoutes = routes.map((route) => (
        <NavLink key={route.name} {...route} isAnimated />
    ))

    return (
        <Box
            as='header'
            w='100vw'
            position='fixed'
            zIndex='20'
            h='headerHeight'
            color='dark'
            bg={scrollY ? 'rgba(255, 255, 255, 0.45)' : undefined}
            transition='all 0.1s linear'
            sx={{
                backdropFilter: 'blur(5px)'
            }}
        >
            <Container
                display='flex'
                justifyContent='space-between'
                alignItems='center'
            >
                <Logo animated />
                <Flex
                    sx={{
                        gap: '2rem',
                        '@media (max-width: 850px)': {
                            gap: '1rem'
                        },
                        '@media (max-width: 750px)': {
                            display: 'none'
                        }
                    }}
                >
                    {navRoutes}
                </Flex>
                <Box fontSize='1.2em'>
                    <Search />
                    <HeaderMenu />
                </Box>
            </Container>
        </Box>
    )
}

export { Header }

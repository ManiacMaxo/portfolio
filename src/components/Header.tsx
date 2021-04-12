import { Container, Stack } from '@chakra-ui/layout'
import { Box, IconButton } from '@chakra-ui/react'
import React from 'react'
import { BiMenuAltRight, BiSearch } from 'react-icons/bi'
import { Logo, NavLink } from '.'
import { routes } from '../constants'
import { useWindowScroll } from '../hooks'

const Header: React.FC = () => {
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
                <Stack direction='row' as='nav' spacing='2rem'>
                    {routes.map((route) => (
                        <NavLink {...route} key={route.name} />
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

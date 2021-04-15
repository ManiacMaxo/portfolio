import { Container, Stack } from '@chakra-ui/layout'
import { Box, IconButton, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { Logo, NavLink } from '.'
import { routes } from '../constants'
import { useWindowScroll } from '../hooks'
import { HeaderMenu } from './HeaderMenu'

const Header: React.FC = () => {
    const { scrollY } = useWindowScroll()
    const [isLargerThan850] = useMediaQuery('(min-width: 850px)')

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
            color='light.dark'
            bg={scrollY ? 'rgba(255, 255, 255, 0.45)' : undefined}
            transition='all 0.1s linear'
        >
            <Container
                display='flex'
                justifyContent='space-between'
                alignItems='center'
            >
                <Logo animated />
                {isLargerThan850 && (
                    <Stack direction='row' as='nav' spacing='2rem'>
                        {routes.map((route) => (
                            <NavLink key={route.name} {...route} isAnimated />
                        ))}
                    </Stack>
                )}
                <Box fontSize='1.2em'>
                    <IconButton
                        icon={<BiSearch />}
                        variant='circle'
                        aria-label='search'
                        isRound
                        marginRight='0.4rem'
                    />
                    <HeaderMenu />
                </Box>
            </Container>
        </Box>
    )
}

export { Header }

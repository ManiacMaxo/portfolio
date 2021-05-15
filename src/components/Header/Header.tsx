import { Container, Stack } from '@chakra-ui/layout'
import { Box, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { Logo, NavLink } from '..'
import { useWindowScroll } from '../../hooks'
import { routes } from '../../lib/constants'
import { ChangeTheme } from './ChangeTheme'
import styles from './Header.module.scss'
import { HeaderMenu } from './HeaderMenu'
import { Search } from './Search'

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
            color='light.dark'
            bg={scrollY ? 'rgba(255, 255, 255, 0.45)' : undefined}
            transition='all 0.1s linear'
            className={styles.root}
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
                    <ChangeTheme />
                    <Search />
                    <HeaderMenu />
                </Box>
            </Container>
        </Box>
    )
}

export { Header }

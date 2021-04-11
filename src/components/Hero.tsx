import { useColorModeValue } from '@chakra-ui/color-mode'
import { Container } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/react'
import React from 'react'

interface Props {
    askew?: boolean
}

const Hero: React.FC<Props> = (props) => {
    const background = useColorModeValue('light.primary', 'dark.primary')

    return (
        <Box
            clipPath='polygon(0 0, 100% 0, 100% 70%, 0 100%)'
            paddingTop='var(--chakra-sizes-headerHeight)'
            // does not work with just headerHeight
            paddingBottom='4rem'
            bg={background}
        >
            <Container>{props.children}</Container>
        </Box>
    )
}

export { Hero }

import { useColorModeValue } from '@chakra-ui/color-mode'
import { Container } from '@chakra-ui/layout'
import { Box, ChakraProps } from '@chakra-ui/react'
import React from 'react'

interface Props extends ChakraProps {
    askew?: boolean
    float?: 'left' | 'right'
}

const Hero: React.FC<Props> = ({ children, askew, float, ...chakraProps }) => {
    const background = useColorModeValue('light.primary', 'dark.primary')

    const cut =
        float === 'right'
            ? 'polygon(0 0, 100% 0, 100% 100%, 0 75%)'
            : 'polygon(0 0, 100% 0, 100% 75%, 0 100%)'

    return (
        <Box
            clipPath={askew ? cut : undefined}
            paddingTop='var(--chakra-sizes-headerHeight)'
            // does not work with just headerHeight
            paddingBottom={askew ? '5rem' : '2rem'}
            bg={background}
            textAlign={float ?? 'left'}
            {...chakraProps}
        >
            <Container>{children}</Container>
        </Box>
    )
}

export { Hero }

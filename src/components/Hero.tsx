import { useColorModeValue } from '@chakra-ui/color-mode'
import { Container } from '@chakra-ui/layout'
import { Box, ChakraProps, useToken } from '@chakra-ui/react'
import React from 'react'

interface Props extends ChakraProps {
    askew?: boolean
    float?: 'left' | 'right'
}

const Hero: React.FC<Props> = ({ children, askew, float, ...chakraProps }) => {
    const background = useColorModeValue('light.primary', 'dark.primary')
    const color = useColorModeValue('light.textInverted', 'dark.textInverted')
    const [headerHeight] = useToken('sizes', ['headerHeight'])

    const cut = `polygon(0 0, 100% 0, ${
        float === 'right' ? '100% 100%, 0 80%' : '100% 80%, 0 100%'
    })`

    return (
        <Box
            clipPath={askew ? cut : undefined}
            paddingTop={`calc(${headerHeight} + 1rem)`}
            paddingBottom={askew ? '5rem' : '4rem'}
            bg={background}
            textAlign={float ?? 'left'}
            color={color}
            {...chakraProps}
        >
            <Container>{children}</Container>
        </Box>
    )
}

export { Hero }

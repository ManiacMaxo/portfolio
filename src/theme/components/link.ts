/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ChakraTheme, ThemeComponentProps } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export const Link = {
    variants: {
        outline: (props: ThemeComponentProps<ChakraTheme>) => ({
            display: 'block',
            padding: '12px',
            borderRadius: '100%',
            borderColor: 'white',
            borderWidth: 2,
            transition: 'all 0.3s ease-out',
            _hover: {
                backgroundColor: 'white',
                color: mode('light.secondary.dark', 'dark.secondary')(props)
            }
        }),
        inline: (props: ThemeComponentProps<ChakraTheme>) => ({
            backgroundPositionY: '-0%',
            backgroundSize: 'auto 175%',
            backgroundImage: mode(
                'linear-gradient(transparent 50%, light.highlight 50%)',
                'linear-gradient(transparent 50%, dark.highlight 50%)'
            )(props),
            transition: 'background 500ms ease',
            _hover: {
                backgroundPositionY: '100%'
            }
        })
    }
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ChakraTheme, ThemeComponentProps } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export const Input = {
    variants: {
        outline: (props: ThemeComponentProps<ChakraTheme>) => ({
            _focus: {
                borderColor: mode('light.primary', 'dark.primary')(props),
                boxShadow:
                    '0 0 0 1px ' + mode('light.primary', 'dark.primary')(props)
            }
        })
    }
}

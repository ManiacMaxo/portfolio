import { ChakraTheme, ThemeComponentProps } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

export const Button = {
    variants: {
        circle: (props: ThemeComponentProps<ChakraTheme>) => ({
            boxShadow: '0 3px 0 rgb(0 0 0 / 10%)',
            transition: 'all 0.2s ease',
            bg: mode('white', 'white')(props),
            padding: 'none',
            _hover: {
                transform: 'perspective(5em) translate3d(0, 0, 10px)',
                boxShadow: '0 1px 0 rgb(0 0 0 / 10%)'
            },
            _focus: {
                transform: 'perspective(5em) translate3d(0, 0, 10px)',
                boxShadow: '0 1px 0 rgb(0 0 0 / 10%)'
            }
        })
    }
}

import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { dark, light } from './colors'
import { Button, Container, Input, Link } from './components'

const headerHeight = '100px'
const footerHeight = '76px'

const theme = extendTheme({
    colors: {
        dark,
        light
    },
    styles: {
        global: (props) => ({
            body: {
                bg: mode('light.bg', 'dark.bg')(props),
                color: mode('light.text', 'dark.text')(props),
                overflowX: 'hidden'
            },
            main: {
                minHeight: `calc(100vh - ${footerHeight})`
            }
        })
    },
    components: {
        Container,
        Link,
        Input,
        Button
    },
    sizes: { headerHeight, footerHeight },
    fonts: {
        body: `'Noah', sans-serif`,
        heading: `'Archia', sans-serif`,
        secondary: `'Playfair Display', serif`
    }
})

export default theme

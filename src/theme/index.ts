import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { dark, light } from './colors'
import { Breadcrumb, Button, Container, Link } from './components'

const headerHeight = '100px'
const footerHeight = '250px'

const theme = extendTheme({
    colors: {
        dark,
        light
    },
    styles: {
        global: (props) => ({
            body: {
                bg: mode('light.bg', 'dark.bg')(props),
                color: mode('light.text', 'dark.text')(props)
            },
            '.main': {
                minHeight: `calc(100vh - ${footerHeight})`
            }
        })
    },
    components: {
        Container,
        Breadcrumb,
        Link,
        Button
    },
    sizes: { headerHeight, footerHeight },
    fonts: {
        body: `'Archia', sans-serif`,
        heading: `'Raleway', sans-serif`,
        secondary: `'Playfair Display', serif`
    }
})

export default theme

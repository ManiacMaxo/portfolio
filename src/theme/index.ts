import { extendTheme } from '@chakra-ui/react'
import { Button, Container, Input, Link } from './components'

const headerHeight = '100px'
const footerHeight = '76px'

const theme = extendTheme({
    colors: {
        primary: '#a8d0e6',
        secondary: { normal: '#f99797', light: '#faabaa', dark: '#f76c6c' },
        highlight: '#f8e9a1',
        dark: '#24305e',
        text: '#000000',
        textInverted: '#ffffff',
        bg: '#ffffff',
        hover: '#f8e9a1'
    },
    styles: {
        global: {
            body: {
                bg: 'bg',
                color: 'text',
                overflowX: 'hidden'
            },
            main: {
                minHeight: `calc(100vh - ${footerHeight})`
            }
        }
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
        secondary: `'Playfair Display', serif`,
        monospace: `'Source Code Pro', monospace`
    }
})

export default theme

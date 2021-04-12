import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const headerHeight = '100px'
const footerHeight = '250px'

const theme = extendTheme({
    colors: {
        dark: {
            primary: '',
            seconday: '',
            hightlight: '',
            text: '',
            textInverted: '',
            bg: '',
            hover: ''
        },
        light: {
            primary: '#a8d0e6',
            secondary: '#f76c6c',
            highlight: '#f8e9a1',
            dark: '#24305e',
            text: '#000000',
            textInverted: '#ffffff',
            bg: '#ffffff',
            hover: '#f8e9a1'
        }
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
        Container: {
            baseStyle: {
                maxWidth: '1350px',
                width: 'min(90vw, 100%)',
                height: '100%'
            }
        },
        Link: {
            variants: {
                outline: (props) => ({
                    display: 'block',
                    padding: '15px',
                    borderRadius: '100%',
                    borderColor: 'white',
                    borderWidth: '2px',
                    transition: 'all 0.3s ease-out',
                    _hover: {
                        backgroundColor: 'white',
                        color: mode('light.secondary', 'dark.secondary')(props)
                    }
                })
            }
        },
        Button: {
            variants: {
                circle: (props) => ({
                    boxShadow: '0 3px 0 rgb(0 0 0 / 10%)',
                    transition: 'all 0.2s ease',
                    bg: mode('white', 'white')(props),
                    padding: '0',
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
        },
        Breadcrumb: {
            baseStyle: {
                _hover: {
                    fontWeight: 'bold'
                }
            }
        }
    },
    sizes: { headerHeight, footerHeight },
    fonts: {
        body: `'Raleway', sans-serif`,
        secondary: `'Playfair Display', serif`
    }
})

export default theme

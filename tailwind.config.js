const plugin = require('tailwindcss/plugin')

const CONTAINER_WIDTH = 90

module.exports = {
    purge: [
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/pages/**/*.{js,ts,jsx,tsx}'
    ],
    mode: 'jit',
    darkMode: 'class',
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            primary: {
                DEFAULT: '#6B7FD7',
                50: '#DEE3F7',
                100: '#CED5F3',
                200: '#BFC8EF',
                300: '#A1AEE7',
                400: '#8596DE',
                500: '#6B7FD7',
                600: '#5665AB',
                700: '#404C81',
                800: '#2B3356',
                900: '#15192B'
            },
            secondary: {
                DEFAULT: '#eaeaea',
                50: '#',
                100: '#',
                200: '#',
                300: '#',
                400: '#',
                500: '#',
                600: '#',
                700: '#',
                800: '#',
                900: '#'
            },
            danger: '#ff5555'
        },
        fontFamily: {
            body: ['Prompt', 'sans-serif'],
            heading: ['Emberly', 'serif']
        },
        extend: {
            zIndex: {
                '-1': '-1',
                1: 1,
                overlay: 100
            },
            spacing: (theme) => {
                const containerOuside = `calc((100vw - ${CONTAINER_WIDTH}) / 2))`
                const maxWidth =
                    parseInt(theme('screens.2xl').match(/(\d)+/)[0]) / 2

                return {
                    'container-outside': containerOuside,
                    'container-outside-max': `max(${containerOuside}, ${maxWidth})`
                }
            }
        }
    },
    variants: {
        extend: {},
        container: []
    },
    plugins: [
        plugin(({ addComponents, addUtilities }) => {
            addComponents([
                {
                    '.container': {
                        // maxWidth: theme('screens.2xl'),
                        width: `min(100%, ${CONTAINER_WIDTH}vw)`,
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }
                }
            ])
            addUtilities([
                {
                    '.bg-conic-gradient': {
                        backgroundImage: `conic-gradient(from 180deg at 50% 100%, var(--tw-gradient-from), var(--tw-gradient-to))`
                    }
                }
            ])
        })
    ],
    corePlugins: {
        container: false
    }
}

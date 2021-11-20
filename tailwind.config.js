const plugin = require('tailwindcss/plugin')

const CONTAINER_WIDTH = 90

module.exports = {
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    mode: 'jit',
    darkMode: 'class',
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            primary: '#FFF8F0',
            secondary: '#02030A',
            accent: '#C79C6B',
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

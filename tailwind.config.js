module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    mode: 'jit',
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            primary: {
                DEFAULT: '#2b2d42'
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
            accent: {
                DEFAULT: '#eaeaea',
                transparent: '#6b7fd7cc',
                50: '#',
                100: '#',
                200: '#',
                300: '#',
                400: '#c4ccef',
                500: '#',
                600: '#a6b2e7',
                700: '#',
                800: '#8999df',
                900: '#6b7fd7'
            }
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '0'
            }
        },
        fontFamily: {
            body: ['Prompt', 'sans-serif'],
            title: {
                DEFAULT: ['ChaneyExtended', 'sans-serif'],
                wide: ['ChaneyUltraExtended', 'sans-serif']
            },
            mono: ['CallingCode', 'monospace']
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
}

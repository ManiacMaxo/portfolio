export const Button = {
    variants: {
        circle: {
            boxShadow: '0 3px 0 rgb(0 0 0 / 10%)',
            transition: 'all 0.2s ease',
            bg: 'white',
            padding: 0,
            borderRadius: 'full',
            _hover: {
                transform: 'perspective(5em) translate3d(0, 0, 10px)',
                boxShadow: '0 1px 0 rgb(0 0 0 / 10%)'
            }
        }
    }
}

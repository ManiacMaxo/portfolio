export const Link = {
    variants: {
        outline: {
            display: 'block',
            padding: '12px',
            borderRadius: '100%',
            borderColor: 'white',
            borderWidth: 2,
            transition: 'all 0.3s ease-out',
            _hover: {
                backgroundColor: 'white',
                color: 'secondary.dark'
            }
        },
        inline: {
            backgroundPositionY: '-0%',
            backgroundSize: 'auto 175%',
            backgroundImage: 'linear-gradient(transparent 50%, highlight 50%)',
            transition: 'background 500ms ease',
            _hover: {
                backgroundPositionY: '100%'
            }
        }
    }
}

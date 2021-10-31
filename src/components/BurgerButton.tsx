import { motion } from 'framer-motion'
import React from 'react'

interface Props {
    onClick: () => void
}

export const Path: React.FC<any> = (props) => {
    return (
        <motion.path
            fill='transparent'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            {...props}
        />
    )
}

const BurgerButton: React.FC<Props> = (props) => {
    return (
        <button
            onClick={props.onClick}
            aria-label='burger button'
            className='text-xl'
        >
            <svg width='1em' height='1em' viewBox='0 0 20 20'>
                <Path
                    variants={{
                        open: { d: 'M 3 16.5 L 17 2.5' },
                        closed: { d: 'M 2 2.5 L 20 2.5' }
                    }}
                />
                <Path
                    d='M 2 9.423 L 20 9.423'
                    variants={{
                        open: { x: '200%' },
                        closed: { x: 0 }
                    }}
                    transition={{ duration: 0.2 }}
                />
                <Path
                    variants={{
                        open: { d: 'M 3 2.5 L 17 16.346' },
                        closed: { d: 'M 2 16.346 L 20 16.346' }
                    }}
                />
            </svg>
        </button>
    )
}

export { BurgerButton }

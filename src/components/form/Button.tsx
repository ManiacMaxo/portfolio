import { css } from '@emotion/css'
import classNames from 'classnames'
import { HTMLMotionProps, motion, Variants } from 'framer-motion'
import React from 'react'

interface Props extends HTMLMotionProps<'button'> {
    variant?: 'primary' | 'secondary'
}

const Button: React.FC<Props> = (props) => {
    const { className, variant, ...rest } = props

    const button: Variants = {
        initial: {
            transform: 'scale(1) translate(0)'
        },
        clicked: {
            transform: 'scale(0.9) translate(0)'
        }
    }

    const classes = classNames(
        'appearance-none relative border-none outline-none flex items-center justify-center gap-2 w-max',
        'rounded text-sm px-6 py-3 transform focus:scale-90 overflow-hidden flex-shrink-0',

        css`
            transition: color 0.5s, transform 0.2s, background-color 0.2s;
            &::after,
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
            }
        `,
        variant === 'primary' && 'bg-secondary text-primary',
        variant === 'secondary' &&
            [
                'bg-transparent text-accent-600 hover:text-accent focus:text-accent',
                'before:absolute before:top-0 before:left-0 after:absolute after:top-0 after:left-0',
                css`
                    &:focus::before,
                    &:hover::before {
                        opacity: 0;
                    }

                    &:focus::after,
                    &:hover::after {
                        opacity: 1;
                        transform-origin: 100px 100px;
                        transform: scale(1) translate(-10px, -70px);
                    }

                    &::before {
                        right: 0;
                        bottom: 0;
                        border: 3px solid var(--colors-accent-60);
                        transition: opacity 0.3s, border 0.3s;
                        border-radius: 0.25rem;
                    }

                    &::after {
                        width: 200px;
                        height: 200px;
                        background-color: var(--colors-accent-60);
                        border-color: transparent;
                        border-radius: 9999px;
                        transform: translate(-10px, -70px) scale(0.1);
                        opacity: 0;
                        z-index: -1;
                        transition: transform 0.3s, opacity 0.3s,
                            background-color 0.3s;
                    }
                `
            ].join(' '),
        className
    )

    return (
        <motion.button
            variants={button}
            initial='initial'
            whileTap='clicked'
            transition={{ duration: 0.1 }}
            className={classes}
            {...rest}
        >
            {props.children}
        </motion.button>
    )
}

export { Button }

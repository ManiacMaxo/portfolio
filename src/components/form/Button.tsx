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
        'appearance-none border-none outline-none flex items-center justify-center gap-2 w-max',
        'rounded px-5 py-3.5 transform focus:scale-90 overflow-hidden flex-shrink-0',
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
        {
            'bg-secondary text-primary dark:bg-primary dark:text-secondary':
                variant === 'primary',
            [[
                'bg-transparent text-secondary hover:text-primary focus:text-primary',
                'dark:text-primary dark:hover:text-secondary focus:text-secondary',
                'before:absolute before:inset-0 after:absolute after:top-0 after:left-0',
                'before:rounded before:border-secondary dark:before:border-primary before:border-2 before:border-solid focus:before:opacity-0 hover:before:opacity-0',
                'after:bg-secondary dark:after:bg-primary after:rounded-full after:opacity-0',
                css`
                    &:focus::after,
                    &:hover::after {
                        opacity: 1;
                        transform-origin: 100px 100px;
                        transform: scale(1) translate(-10px, -70px);
                    }

                    &::before {
                        transition: opacity 0.3s, border 0.3s;
                    }

                    &::after {
                        width: 200px;
                        height: 200px;
                        transform: translate(-10px, -70px) scale(0.1);
                        z-index: -1;
                        transition: transform 0.3s, opacity 0.3s,
                            background-color 0.3s;
                    }
                `
            ].join(' ')]: variant === 'secondary'
        },
        className
    )

    return (
        <motion.button
            variants={button}
            initial='initial'
            whileTap='clicked'
            transition={{ duration: 0.1 }}
            className={classes}
            // eslint-disable-next-line no-console
            onMouseEnter={(e) => console.log(e.clientX, e.clientY)}
            {...rest}
        >
            {props.children}
        </motion.button>
    )
}

export { Button }

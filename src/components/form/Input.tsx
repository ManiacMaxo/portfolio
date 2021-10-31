import { css } from '@emotion/css'
import classNames from 'classnames'
import React, { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    name: string
    variant?: 'outlined' | 'filled'
    error?: any
}

const Input: React.FC<Props> = (props) => {
    const { label, variant, className, error, ...rest } = props

    const classes = classNames(
        'appearance-none outline-none py-2',
        variant === 'outlined'
            ? {
                  'border-b-2 bg-transparent transition duration-200': true,
                  'border-danger': error,
                  'border-accent-600 focus:border-accent-900 ': !error
              }
            : 'px-3'
    )

    return (
        <div className={classNames('flex flex-col flex-1 relative', className)}>
            {label && (
                <label
                    htmlFor={props.name}
                    className={classNames(
                        'uppercase text-xs',
                        css`
                            letter-spacing: 0.05ch;
                        `
                    )}
                >
                    {label}
                </label>
            )}
            <input {...rest} className={classes} />
            {error && (
                <span className='text-danger absolute top-full'>{error}</span>
            )}
        </div>
    )
}

export { Input }

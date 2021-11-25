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
        'appearance-none outline-none text-md',
        variant === 'outlined' && {
            'py-2 border-b-2 bg-transparent transition duration-200': true,
            'border-danger': error,
            'dark:border-primary border-secondary': !error
        },
        variant === 'filled' && {
            'p-3 w-full rounded bg-secondary border-2': true,
            'border-danger': error,
            'border-secondary': !error
        }
    )

    return (
        <div className={classNames('flex flex-col flex-1 relative', className)}>
            {label && (
                <label
                    htmlFor={props.name}
                    className='text-xs tracking-widest uppercase'
                    title={props.required ? 'Required' : 'Optional'}
                >
                    {label}
                    {props.required && '*'}
                </label>
            )}
            <input {...rest} className={classes} />
            {error && (
                <span className='absolute text-danger top-full'>{error}</span>
            )}
        </div>
    )
}

export { Input }

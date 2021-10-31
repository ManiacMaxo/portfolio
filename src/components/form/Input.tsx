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
        'appearance-none outline-none text-primary-700 text-md',
        variant === 'outlined' && {
            'py-2 border-b-2 bg-transparent transition duration-200': true,
            'border-danger placeholder-danger placeholder-opacity-60': error,
            'border-primary-300 focus:border-primary-600 placeholder-primary-200':
                !error
        },
        variant === 'filled' && {
            'p-3 w-full rounded bg-secondary border-2 ': true,
            'border-danger placeholder-danger placeholder-opacity-60': error,
            'border-secondary placeholder-primary-400': !error
        }
    )

    return (
        <div className={classNames('flex flex-col flex-1 relative', className)}>
            {label && (
                <label
                    htmlFor={props.name}
                    className='uppercase text-xs tracking-widest'
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

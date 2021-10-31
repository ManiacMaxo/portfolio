/* eslint-disable no-console */
import { useFormik } from 'formik'
import React from 'react'
import { Button, Input } from '..'

const Contact: React.FC = () => {
    const onSubmit = (values: any) => {
        console.log(values)

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
    }

    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const validationFunction = (values: typeof initialValues) => {
        const validateEmail = (email: string): string => {
            if (email.length === 0) return 'Email is required'
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
                return 'Invalid email address'
            return undefined
        }

        const filterOut = (obj: any) =>
            Object.fromEntries(
                Object.entries(obj).filter(([, value]) => value !== undefined)
            )

        return filterOut({
            firstName:
                values.firstName.length === 0
                    ? 'First name is required'
                    : undefined,
            email: validateEmail(values.email),
            message:
                values.message.length === 0 ? 'Message is required' : undefined
        })
    }

    const formik = useFormik({
        initialValues,
        validate: validationFunction,
        onSubmit
    })

    return (
        <section className='bg-secondary text-primary py-12 shadow-inner'>
            <div className='container grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='flex flex-col items-center md:items-end'>
                    <h3 className='title text-2xl w-max'>Get in touch!</h3>
                </div>

                <form
                    className='grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-8'
                    onSubmit={formik.handleSubmit}
                >
                    <Input
                        name='firstName'
                        variant='outlined'
                        placeholder='Enter your first name'
                        label='First name'
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.firstName && formik.errors.firstName
                        }
                    />
                    <Input
                        name='lastName'
                        variant='outlined'
                        placeholder='Enter your last name'
                        label='Last name'
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                    />
                    <Input
                        name='email'
                        variant='outlined'
                        placeholder='Enter your email'
                        label='Email'
                        type='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && formik.errors.email}
                    />
                    <Input
                        name='phone'
                        variant='outlined'
                        placeholder='Enter your phone number'
                        label='Phone number'
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                    />

                    <Input
                        name='message'
                        variant='outlined'
                        placeholder='Enter your message'
                        label='Message'
                        className='col-span-full'
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        error={formik.touched.message && formik.errors.message}
                    />
                    <div>
                        <Button variant='secondary' type='submit'>
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export { Contact }

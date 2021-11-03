/* eslint-disable no-console */
import { useFormik } from 'formik'
import React from 'react'
import { Button, Input, Layout } from '../components'

const contact: React.FC = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
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
        <Layout>
            <main className='container flex flex-col items-center justify-center min-h-screen gap-y-14 pt-20 pb-12'>
                <h1 className='font-heading font-bold text-[18vw]'>Contact</h1>

                <a
                    href='mailto:victor@gorchilov.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-center underlined'
                >
                    <p className='text-sm'>If you want to mail me directly</p>
                    <p className='text-2xl md:text-4xl pt-2 pb-1'>
                        victor@gorchilov.com
                    </p>
                </a>

                <form
                    className='grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-8 w-full max-w-7xl'
                    onSubmit={formik.handleSubmit}
                    noValidate
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
                        required
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
                        required
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
                        required
                    />
                    <div className='justify-self-center col-span-full'>
                        <Button variant='secondary' type='submit'>
                            Submit
                        </Button>
                    </div>
                </form>
            </main>
        </Layout>
    )
}

export default contact

import Link from 'next/link'
import React from 'react'

const FourOhFour: React.FC = () => {
    return (
        <main className='flex flex-col items-center justify-center h-screen w-screen'>
            <h1 className='font-bold text-9xl scale-150 absolute top-1/3 left-1/2 transform translate-y-16 -translate-x-1/2 text-primary-400 opacity-50'>
                404
            </h1>
            <Link href='/'>
                <a className='title text-center text-5xl z-10'>Go back home</a>
            </Link>
        </main>
    )
}

export default FourOhFour

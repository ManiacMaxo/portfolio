import Link from 'next/link'
import React from 'react'

const FourOhFour: React.FC = () => {
    return (
        <main className='flex items-center justify-center h-screen w-screen'>
            <div className='relative text-center'>
                <h1 className='font-bold text-[20vw] leading-[0.8em] scale-150 absolute transform left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-primary-600 opacity-50'>
                    404
                </h1>
                <Link href='/'>
                    <a className='relative font-title-wide text-center text-2xl sm:text-3xl lg:text-5xl'>
                        Go back home
                    </a>
                </Link>
            </div>
        </main>
    )
}

export default FourOhFour

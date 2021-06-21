import Link from 'next/link'
import React from 'react'

const FourOhFour: React.FC = () => {
    return (
        <main className='FourOhFour container'>
            <h1>404</h1>
            <Link href='/'>
                <a className='title'>Go back home</a>
            </Link>
        </main>
    )
}

export default FourOhFour

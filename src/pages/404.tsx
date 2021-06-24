import Link from 'next/link'
import React from 'react'
import styles from '../styles/FourOhFour.module.scss'
import classNames from 'classnames'

const FourOhFour: React.FC = () => {
    return (
        <main className={classNames(styles.root, 'container')}>
            <h1>404</h1>
            <Link href='/'>
                <a className='title'>Go back home</a>
            </Link>
        </main>
    )
}

export default FourOhFour

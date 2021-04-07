import React from 'react'
import styles from './Home.module.scss'

interface Props {}

const Home: React.FC<Props> = () => {
    return (
        <div className={styles.root}>
            <h1>Hello World!</h1>
        </div>
    )
}

export default Home

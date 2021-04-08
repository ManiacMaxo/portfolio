import React from 'react'
import styles from './Footer.module.scss'

interface Props {}

const Footer: React.FC<Props> = () => {
    return (
        <div className={styles.root}>
            <h1>Footer component</h1>
        </div>
    )
}

export default Footer

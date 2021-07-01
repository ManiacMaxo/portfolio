import React from 'react'
import styles from './Hero.module.scss'

interface Props {
    title: string | JSX.Element
    subtitle: string | JSX.Element
}

const Hero: React.FC<Props> = (props) => {
    return (
        <div className={styles.root}>
            <div className='container'>
                <div className={styles.content}>
                    <h1 className={`${styles.title} title`}>{props.title}</h1>
                    <span className={styles.subtitle}>{props.subtitle}</span>
                    {props.children}
                </div>
                <img src='/images/memoji.png' className={styles.image} />
            </div>
        </div>
    )
}

export { Hero }

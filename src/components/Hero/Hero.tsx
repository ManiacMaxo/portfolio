import { motion, Variants } from 'framer-motion'
import React from 'react'
import styles from './Hero.module.scss'

interface Props {
    title: string
    subtitle: string | JSX.Element
}

const AnimatedText = (props: { text: string }) => {
    const word: Variants = {
        initial: {
            opacity: 0,
            y: '100%'
        },
        animate: {
            opacity: 1,
            y: 0
        }
    }

    const words = props.text.split(' ')

    return (
        <>
            {words.map((w, idx) => (
                <React.Fragment key={w + idx}>
                    <motion.div variants={word} className='inline-block'>
                        {w}
                    </motion.div>{' '}
                </React.Fragment>
            ))}
        </>
    )
}

const Hero: React.FC<Props> = (props) => {
    const container: Variants = {
        initial: {},
        animate: {
            y: 0,
            transition: {
                staggerChildren: 0.2,
                delay: 0.5,
                when: 'beforeChildren'
            }
        }
    }

    const item: Variants = {
        initial: {
            opacity: 0,
            y: '100%'
        },
        animate: {
            opacity: 1,
            y: 0
        }
    }

    return (
        <div className='h-screen flex justify-center'>
            <div className='container flex flex-col-reverse lg:flex-row items-center justify-center'>
                <motion.div
                    className={`${styles.content} pt-8 pb-16 w-full flex flex-col items-center text-center lg:items-start lg:text-left lg:justify-center gap-4`}
                    variants={container}
                    initial='initial'
                    animate='animate'
                >
                    <motion.h1
                        className={`${styles.title} title`}
                        transition={{
                            staggerChildren: 0.1
                        }}
                    >
                        <AnimatedText text={props.title} />
                    </motion.h1>
                    <motion.span className={styles.subtitle} variants={item}>
                        {props.subtitle}
                    </motion.span>
                    {props.children}
                </motion.div>
                <img src='/images/memoji.png' className={styles.image} />
            </div>
        </div>
    )
}

export { Hero }

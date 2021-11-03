import { css } from '@emotion/css'
import { motion, Variants } from 'framer-motion'
import React, { ComponentClass, FunctionComponent } from 'react'

interface Props {
    title: string
    subtitle: string | FunctionComponent<any> | ComponentClass<any, any>
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

    return (
        <>
            {props.text.split(' ').map((w, idx) => (
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

    const maxWidth = css`
        max-width: 75ch;
    `

    const imageStyle = css`
        width: clamp(200px, 30vw, 550px);
    `

    return (
        <div className='h-screen container flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between lg:gap-24'>
            <motion.div
                className={`${maxWidth} pt-8 pb-16 w-full flex flex-col items-center text-center lg:items-start lg:text-left lg:justify-center gap-4`}
                variants={container}
                initial='initial'
                animate='animate'
            >
                <motion.h1
                    className='title text-[8vw]'
                    transition={{
                        staggerChildren: 0.1
                    }}
                >
                    <AnimatedText text={props.title} />
                </motion.h1>
                <motion.span variants={item}>
                    {React.createElement(props.subtitle)}
                </motion.span>
                {props.children}
            </motion.div>
            <img src='/images/memoji.png' className={imageStyle} />
        </div>
    )
}

export { Hero }

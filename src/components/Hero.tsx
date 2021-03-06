import memoji from '@/assets/memoji.png'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
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
                    </motion.div>
                    &nbsp;
                </React.Fragment>
            ))}
        </>
    )
}

const Hero: React.FC<React.PropsWithChildren<Props>> = (props) => {
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
        <div className='container flex flex-col-reverse items-center justify-center h-screen lg:flex-row lg:justify-between lg:gap-24'>
            <motion.div
                className='flex flex-col items-center w-full gap-4 pt-8 pb-16 text-center max-w-[75ch] lg:items-start lg:text-left lg:justify-center'
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
            <Image
                src={memoji}
                alt='me'
                className='w-[clamp(200px, 30vw, 550px)]'
            />
        </div>
    )
}

export { Hero }

import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const ScrollAction: React.FC = () => {
    const [visible, setVisible] = useState(true)

    const handleVisibility = () => setVisible(window.scrollY < 100)

    useEffect(() => {
        window.addEventListener('scroll', handleVisibility)
        return () => window.removeEventListener('scroll', handleVisibility)
    }, [])

    return (
        visible && (
            <div className='absolute transform -translate-x-1/2 bottom-8 left-1/2'>
                <div className='relative flex flex-col items-center w-5 h-10 py-2 border rounded-full border-secondary dark:border-primary'>
                    <motion.div
                        className='w-1 h-2 rounded-full bg-secondary dark:bg-primary'
                        animate={{
                            height: '50%',
                            y: '100%',
                            transition: {
                                repeat: Infinity,
                                repeatType: 'reverse',
                                duration: 1
                            }
                        }}
                    ></motion.div>
                </div>
            </div>
        )
    )
}

export { ScrollAction }

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
            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2'>
                <div className='relative border rounded-full border-secondary dark:border-primary w-5 h-10 flex flex-col items-center py-2'>
                    <motion.div
                        className='bg-secondary dark:bg-primary w-1 h-2 rounded-full'
                        animate={{
                            height: '50%',
                            y: '100%',
                            transition: {
                                yoyo: Infinity,
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

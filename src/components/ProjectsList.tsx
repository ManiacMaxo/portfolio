import { motion, MotionConfig, Variants } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'
import { IProject } from '../lib'

interface Props {
    projects: IProject[]
}

const ProjectsList: React.FC<Props> = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const overlay: Variants = {
        open: {
            y: '0',
            transition: {
                ease: 'linear',
                when: 'beforeChildren',
                delayChildren: 0.2
            }
        },
        closed: {
            y: '100vh',
            transition: {
                ease: 'linear',
                when: 'afterChildren'
            }
        }
    }

    const listItem: Variants = {
        open: {
            x: 0,
            transition: {
                staggerChildren: 0.02,
                staggerDirection: -1
            }
        },
        closed: {
            x: '-100vw',
            transition: {
                staggerChildren: 0.02
            }
        }
    }

    return (
        <MotionConfig transition={{ duration: 0.5 }}>
            <button className='global-footer' onClick={() => setIsOpen(true)}>
                All projects
            </button>

            <motion.div
                className='projects-list-overlay'
                initial='closed'
                animate={isOpen ? 'open' : 'closed'}
                variants={overlay}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className='projects-list-close'
                    aria-label='close'
                />
                <div className='project-image' />
                <ul className='projects-list'>
                    {props.projects.map((project) => (
                        <motion.li key={project._id} variants={listItem}>
                            <Link href={'/' + project.slug}>
                                <a
                                    className='project-list-item title'
                                    data-text={project.title}
                                >
                                    {project.title}
                                </a>
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </MotionConfig>
    )
}

export { ProjectsList }

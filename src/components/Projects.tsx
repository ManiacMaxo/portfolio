import { IProject } from '@/lib'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'

interface Props {
    projects: IProject[]
}

const Projects: React.FC<Props> = (props) => {
    const [image, setImage] = useState<string | null>(null)
    const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 })

    return (
        <ul
            className='container overflow-x-hidden divide-secondary dark:divide-primary'
            onMouseMove={(e) => setMouseCoords({ x: e.pageX, y: e.pageY })}
            onMouseLeave={() => setImage(null)}
        >
            <motion.img
                src={image}
                alt='project'
                className={`absolute top-0 left-0 pointer-events-none ${
                    image ? 'block' : 'hidden'
                }`}
                width={150}
                style={{
                    transform: `translate(${mouseCoords.x - 75}px, ${
                        mouseCoords.y - 75
                    }px)`
                }}
            />

            {props.projects.map((project) => (
                <li
                    key={project._id}
                    className='relative border-b first-of-type:border-t'
                >
                    <Link href={`/${project.slug}`}>
                        <a>
                            <div
                                className='flex items-center justify-between py-1 bg-transparent'
                                onMouseEnter={() => setImage(project.imgUrl)}
                            >
                                <h2 className='text-[3vw]'>{project.title}</h2>
                                <span>{project.start}</span>
                            </div>
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export { Projects }

import { gsap } from 'gsap'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { IProject } from '../lib'

interface Props {
    projects: IProject[]
}

const ProjectsList: React.FC<Props> = (props) => {
    const tl = useRef(gsap.timeline({ ease: 'power4.inOut' }))
    // const dateFormat = new Intl.DateTimeFormat('en-US', {
    //     month: 'long',
    //     year: 'numeric'
    // }).format

    useEffect(() => {
        tl.current.set('.projects-list-overlay', {
            y: '100%'
        })
    }, [])

    const openOverlay = () => {
        tl.current
            .fromTo(
                '.projects-list-overlay',
                {
                    y: '100%'
                },
                {
                    y: 0
                }
            )
            .fromTo(
                '.projects-list li',
                {
                    x: '-100vw'
                },
                {
                    x: 0,
                    stagger: -0.02
                }
            )
    }
    const closeOverlay = () => {
        tl.current.to('.projects-list-overlay', {
            y: '100%',
            duration: 1
        })
    }

    return (
        <>
            <button className='global-footer' onClick={openOverlay}>
                All projects
            </button>

            <div className='projects-list-overlay'>
                <button
                    onClick={closeOverlay}
                    className='projects-list-close'
                    aria-label='close'
                />
                <div className='project-image' />
                <ul className='projects-list'>
                    {props.projects.map((project) => (
                        <li key={project._id}>
                            <Link href={'/' + project.slug}>
                                <a
                                    className='project-list-item title'
                                    data-text={project.title}
                                >
                                    {project.title}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export { ProjectsList }

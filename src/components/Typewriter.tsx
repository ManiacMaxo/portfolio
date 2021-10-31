import React, { useEffect, useState } from 'react'

interface Props {
    options: Array<string>
}

const Typewriter: React.FC<Props> = (props) => {
    const { options } = props

    const [index, setIndex] = useState(0)
    const [letterIndex, setLetterIndex] = useState(0)
    const [blink, setBlink] = useState(true)
    const [reverse, setReverse] = useState(false)

    useEffect(() => {
        const blinkTimeout = setTimeout(() => setBlink((prev) => !prev), 500)
        return () => clearTimeout(blinkTimeout)
    }, [blink])

    useEffect(() => {
        if (letterIndex === options[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 2000)
            return
        }

        if (letterIndex === 0 && reverse) {
            setReverse(false)
            setIndex((prev) => (prev + 1 === options.length ? 0 : prev + 1))
            return
        }

        const timeout = setTimeout(
            () => setLetterIndex((prev) => prev + (reverse ? -1 : 1)),
            reverse ? 75 : 100
        )

        return () => clearTimeout(timeout)
    }, [letterIndex, index, reverse])

    return (
        <span className='relative'>
            {options[index].substring(0, letterIndex)}
            <span className='absolute right-[-4px]'>{blink && '|'}</span>
        </span>
    )
}

export { Typewriter }

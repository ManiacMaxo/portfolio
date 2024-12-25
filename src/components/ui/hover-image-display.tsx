'use client'

import { AnimatePresence, motion } from 'motion/react'
import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import type React from 'react'
import { useState } from 'react'

export type HoverImage = StaticImport

type Props = {
  children: React.ReactNode
  images: HoverImage[]
}

export const HoverImageDisplay = ({ images, children }: Props) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <div className="absolute bottom-full flex w-max items-center justify-center">
            {images.map((img, index) => {
              const isMiddleImage = images.length === 3 && index === 1
              const isOuterImage =
                !isMiddleImage &&
                (images.length === 3 || (images.length === 2 && index < 2))

              const imgProps = 'src' in img ? img : { src: img }

              return (
                <motion.div
                  key={index}
                  className="z-50"
                  initial={{ scale: 0.8, opacity: 0, x: 0, y: 20 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    y: isMiddleImage ? -25 : -5
                  }}
                  exit={{ scale: 0.8, opacity: 0, x: 0, y: 20 }}
                  transition={{ duration: 0.3, ease: 'backInOut' }}
                  style={{
                    rotate: isOuterImage ? (index === 0 ? -10 : 10) : 0,
                    translateX: isOuterImage ? (index === 0 ? 15 : -15) : 0,
                    zIndex: isMiddleImage ? 100 : 0
                  }}
                >
                  <Image
                    {...imgProps}
                    className="w-32 rounded-lg border-4 border-white shadow-lg"
                    alt={`Preview ${index + 1}`}
                  />
                </motion.div>
              )
            })}
          </div>
        )}
      </AnimatePresence>

      {children}
    </div>
  )
}

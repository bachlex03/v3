/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from '~/utils/cn'
import { AnimatePresence, MotionValue, motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { useScrollDirection } from '~/hooks/useScrollDirection'

import { type ReactNode, useRef, useState } from 'react'

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: ReactNode; href: string }[]
  desktopClassName?: string
  mobileClassName?: string
}) => {
  const { isScrollingDown, isAtTop } = useScrollDirection()

  return (
    <>
      <FloatingDockDesktop
        items={items}
        className={desktopClassName}
        isScrollingDown={isScrollingDown}
        isAtTop={isAtTop}
      />
      <FloatingDockMobile
        items={items}
        className={mobileClassName}
        isScrollingDown={isScrollingDown}
        isAtTop={isAtTop}
      />
    </>
  )
}

const FloatingDockMobile = ({
  items,
  className,
  isScrollingDown,
  isAtTop,
}: {
  items: { title: string; icon: ReactNode; href: string }[]
  className?: string
  isScrollingDown: boolean
  isAtTop: boolean
}) => {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      className={cn('fixed right-4 bottom-4 z-50 block md:hidden', className)}
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: isScrollingDown ? 100 : 0,
        opacity: isScrollingDown ? 0 : 1,
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
    >
      <AnimatePresence>
        {open && (
          <motion.div layoutId='nav' className='absolute right-0 bottom-full mb-2 flex flex-col gap-2'>
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  key={item.title}
                  className='flex h-10 w-10 items-center justify-center rounded-full border border-[#64ffda]/20 bg-[#0f182b]/80 backdrop-blur transition-colors duration-200 hover:border-[#64ffda]/40'
                >
                  <div className='h-4 w-4 text-[#64ffda]'>{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className='flex h-10 w-10 items-center justify-center rounded-full border border-[#64ffda]/20 bg-[#0f182b]/80 backdrop-blur transition-colors duration-200 hover:border-[#64ffda]/40'
      >
        <div className='h-auto w-4 text-[#64ffda]'>+</div>
        {/* <IconLayoutNavbarCollapse className='h-5 w-5 text-neutral-500 dark:text-neutral-400' /> */}
      </button>
    </motion.div>
  )
}

const FloatingDockDesktop = ({
  items,
  className,
  isScrollingDown,
  isAtTop,
}: {
  items: { title: string; icon: ReactNode; href: string }[]
  className?: string
  isScrollingDown: boolean
  isAtTop: boolean
}) => {
  const mouseX = useMotionValue(Infinity)
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        'fixed bottom-4 left-1/2 z-50 hidden h-16 -translate-x-1/2 items-end gap-4 rounded-2xl border border-[#64ffda]/20 bg-[#0f182b]/80 px-4 pb-3 backdrop-blur md:flex',
        className,
      )}
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: isScrollingDown ? 100 : 0,
        opacity: isScrollingDown ? 0 : 1,
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  )
}

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue
  title: string
  icon: ReactNode
  href: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

    return val - bounds.x - bounds.width / 2
  })

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20])
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20])

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  const [hovered, setHovered] = useState(false)

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className='relative flex aspect-square items-center justify-center rounded-full border border-[#64ffda]/20 bg-[#0f182b]/60 backdrop-blur transition-colors duration-200 hover:border-[#64ffda]/40'
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: 2, x: '-50%' }}
              className='absolute -top-8 left-1/2 w-fit rounded-md border border-[#64ffda]/20 bg-[#0f182b]/90 px-2 py-0.5 text-xs whitespace-pre text-[#64ffda] backdrop-blur'
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className='flex items-center justify-center text-[#64ffda]'
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  )
}

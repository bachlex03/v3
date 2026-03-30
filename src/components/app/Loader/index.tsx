import { useState, useEffect, type FC } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './styles.module.css'

interface LoaderProps {
  onFinish: () => void
}

const Loader: FC<LoaderProps> = ({ onFinish }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (isMounted) {
      // Total animation duration: draw hexagon (~1.2s) + show letter (~0.5s) + hold (~0.5s) + fade out
      const timer = setTimeout(() => {
        onFinish()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isMounted, onFinish])

  return (
    <AnimatePresence>
      <div className={styles.loader}>
        <motion.div
          className={styles.logoWrapper}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 84 96"
            className={styles.logoSvg}
          >
            <title>Logo</title>
            <g transform="translate(-8.000000, -2.000000)">
              <g transform="translate(11.000000, 5.000000)">
                {/* Hexagon outline - SVG stroke animation */}
                <polygon
                  className={`${styles.hexagon} ${isMounted ? styles.hexagonAnimate : ''}`}
                  stroke="#64ffda"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="39 0 0 22 0 67 39 90 78 68 78 23"
                />
                {/* Letter B - fade in after hexagon draws */}
                <path
                  className={`${styles.letter} ${isMounted ? styles.letterAnimate : ''}`}
                  d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"
                  fill="#64ffda"
                />
              </g>
            </g>
          </svg>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default Loader

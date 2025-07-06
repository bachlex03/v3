import { type FC, type ReactNode } from 'react'
import { useMousePosition } from '~/hooks/useMousePosition'

interface MouseGradientLayoutProps {
  children: ReactNode
}

const MouseGradientLayout: FC<MouseGradientLayoutProps> = ({ children }) => {
  const { x, y } = useMousePosition()

  return (
    <div className='mouse-gradient-container'>
      {/* Gradient overlay that follows mouse */}
      <div
        className='mouse-gradient-overlay'
        style={{
          background: `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />

      {/* Content */}
      <div className='relative z-10'>{children}</div>
    </div>
  )
}

export default MouseGradientLayout

import { type FC, type ReactNode } from 'react'

interface GlowCardProps {
  children: ReactNode
  className?: string
}

const GlowCard: FC<GlowCardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`group relative rounded-lg p-6 transition-all duration-300 hover:bg-slate-800/50 hover:shadow-lg hover:shadow-blue-500/10 ${className}`}
    >
      {/* Subtle glow effect on hover */}
      <div className='absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />

      {/* Content */}
      <div className='relative z-10'>{children}</div>
    </div>
  )
}

export default GlowCard

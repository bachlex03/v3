import { type FC, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '~/utils/cn'
import styles from './styles.module.scss'

export const buttonVariants = cva(
  // Base classes
  'py-[12px] px-[18px] rounded border-solid border font-mono',
  {
    variants: {
      variant: {
        primary: 'text-primary border-primary',
      },
      size: {
        sm: '',
        md: 'text-sm',
        lg: '',
        icon: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variants?: string
  isLoading?: boolean
  icon?: ReactNode
  iconPosition?: 'before' | 'after'
}

const Button: FC<Props> = ({
  children,
  variants = buttonVariants({}),
  isLoading = false,
  disabled,
  className,
  icon,
  iconPosition = 'before',
  ...props
}) => {
  // Check if this is an icon-only button (no children text)
  const isIconOnly = !children || children === ''

  // Loading spinner component
  const LoadingSpinner = () => (
    <svg className='h-4 w-4 animate-spin' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
      <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
      <path
        className='opacity-75'
        fill='currentColor'
        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
      />
    </svg>
  )

  return (
    <button className={cn(variants, className, styles['wrapper'])} disabled={disabled || isLoading} {...props}>
      {isLoading && iconPosition === 'before' && (
        <span className={cn('inline-block translate-y-0.5', !isIconOnly && 'mr-2')}>
          <LoadingSpinner />
        </span>
      )}
      {!isLoading && icon && iconPosition === 'before' && (
        <span className={cn('inline-block translate-y-0.5', !isIconOnly && 'mr-2')}>{icon}</span>
      )}
      {children}
      {isLoading && iconPosition === 'after' && (
        <span className={cn('inline-block translate-y-0.5', !isIconOnly && 'ml-2')}>
          <LoadingSpinner />
        </span>
      )}
      {!isLoading && icon && iconPosition === 'after' && (
        <span className={cn('inline-block translate-y-0.5', !isIconOnly && 'ml-2')}>{icon}</span>
      )}
    </button>
  )
}

export default Button

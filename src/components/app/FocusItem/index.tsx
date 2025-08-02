import { type FC, type ReactNode, type HTMLAttributes, useContext } from 'react'
import { FocusModeContext } from '../FocusModeProvider'

type FocusItemProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
  itemName: string
  baseClasses?: string
}

const FocusItem: FC<FocusItemProps> = ({ children, itemName, baseClasses = '', className = '', ...props }) => {
  const focusMode = useContext(FocusModeContext)

  if (!focusMode) {
    throw new Error('FocusItem must be used within FocusModeProvider')
  }

  const { handleMouseEnter, handleMouseLeave, getItemClasses } = focusMode

  const finalClasses = getItemClasses(itemName, `${baseClasses} ${className}`)

  return (
    <div
      className={finalClasses}
      onMouseEnter={() => handleMouseEnter(itemName)}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  )
}

export default FocusItem

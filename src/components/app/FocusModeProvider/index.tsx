import { type FC, type ReactNode, useState, createContext } from 'react'

type FocusModeProviderProps = {
  children: ReactNode
}

type FocusModeContextType = {
  focusedItem: string | null
  handleMouseEnter: (itemName: string) => void
  handleMouseLeave: () => void
  getItemClasses: (itemName: string, baseClasses: string) => string
}

export const FocusModeContext = createContext<FocusModeContextType | null>(null)

const FocusModeProvider: FC<FocusModeProviderProps> = ({ children }) => {
  const [focusedItem, setFocusedItem] = useState<string | null>(null)

  const handleMouseEnter = (itemName: string) => {
    setFocusedItem(itemName)
  }

  const handleMouseLeave = () => {
    setFocusedItem(null)
  }

  const getItemClasses = (itemName: string, baseClasses: string) => {
    const isFocused = focusedItem === itemName
    const isBlurred = focusedItem && !isFocused

    return `${baseClasses} ${isBlurred ? 'blur-sm opacity-50 scale-95' : 'blur-0 opacity-100 scale-100'}`
  }

  const contextValue: FocusModeContextType = {
    focusedItem,
    handleMouseEnter,
    handleMouseLeave,
    getItemClasses,
  }

  return <FocusModeContext.Provider value={contextValue}>{children}</FocusModeContext.Provider>
}

export default FocusModeProvider

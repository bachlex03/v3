import { useState } from 'react'

type UseFocusModeReturn = {
  focusedItem: string | null
  handleMouseEnter: (itemName: string) => void
  handleMouseLeave: () => void
  getItemClasses: (itemName: string, baseClasses: string) => string
}

const useFocusMode = (): UseFocusModeReturn => {
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

  return {
    focusedItem,
    handleMouseEnter,
    handleMouseLeave,
    getItemClasses,
  }
}

export default useFocusMode

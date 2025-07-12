import { useState, useEffect } from 'react'

export const useScrollDirection = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Track if at top of page
      setIsAtTop(currentScrollY < 50)

      // Chỉ thực hiện khi scroll > 100px để tránh flicker
      if (currentScrollY > 100) {
        setIsScrollingDown(currentScrollY > lastScrollY)
      } else {
        setIsScrollingDown(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return { isScrollingDown, isAtTop }
}

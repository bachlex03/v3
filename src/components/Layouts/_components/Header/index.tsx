import { type FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollDirection } from '~/hooks/useScrollDirection'
import { cn } from '~/utils/cn'
import { navItems } from '../../_components/Header/_data'
import styles from './styles.module.scss'

type Props = object

const Header: FC<Props> = () => {
  const [activeItem, setActiveItem] = useState<string>('')
  const { isScrollingDown, isAtTop } = useScrollDirection()

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out origin-top',
        isScrollingDown ? '-translate-y-full scale-95 opacity-80' : 'backdrop-blur translate-y-0 scale-100 opacity-100',
      )}
    >
      <div
        className={cn(
          'min-h-[80px] w-full transition-all duration-300 ease-in-out',
          isAtTop ? 'bg-transparent shadow-none' : 'backdrop-blur shadow-[0_10px_30px_-10px_rgba(2,12,27,.7)]',
        )}
      >
        <div className='w-[calc(100%-40px)] mx-auto h-full'>
          <nav className='flex items-center justify-between min-h-[80px] px-10'>
            <div className='text-2xl font-bold text-[#64ffda]'>
              <img src='/assets/svgs/logo.svg' alt='logo' className='w-10 h-10 object-contain' />
            </div>
            <ul className={cn('flex gap-2 py-3 text-[#64ffda]', styles['nav-list'])}>
              {navItems.map((item) => (
                <li key={item.name} className={cn('text-sm font-mono px-2 hover:text-secondary')}>
                  <Link
                    to={item.path}
                    onClick={() => setActiveItem(item.name)}
                    className={cn(
                      'block py-2 border-b-2 transition-colors duration-200',
                      activeItem === item.name
                        ? 'border-[#64ffda] text-[#64ffda]'
                        : 'border-transparent text-slate-400 hover:border-[#64ffda]/50 hover:text-[#64ffda]',
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

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
        'fixed top-0 right-0 left-0 z-50 origin-top transition-all duration-300 ease-in-out',
        isScrollingDown ? '-translate-y-full scale-95 opacity-80' : 'translate-y-0 scale-100 opacity-100 backdrop-blur',
      )}
    >
      <div
        className={cn(
          'min-h-[80px] w-full transition-all duration-300 ease-in-out',
          isAtTop ? 'bg-transparent shadow-none' : 'shadow-[0_10px_30px_-10px_rgba(2,12,27,.7)] backdrop-blur',
        )}
      >
        <div className='mx-auto h-full w-[calc(100%-40px)]'>
          <nav className='flex min-h-[80px] items-center justify-between px-10'>
            <div className='text-2xl font-bold text-[#64ffda]'>
              <img src='/assets/svgs/logo.svg' alt='logo' className='h-10 w-10 object-contain' />
            </div>
            <ul className={cn('flex gap-2 py-3 text-[#64ffda]', styles['nav-list'])}>
              {navItems.map((item) => (
                <li key={item.name} className={cn('hover:text-secondary px-2 font-mono text-sm')}>
                  <Link
                    to={item.path}
                    onClick={() => setActiveItem(item.name)}
                    className={cn(
                      'block border-b-2 py-2 transition-colors duration-200',
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

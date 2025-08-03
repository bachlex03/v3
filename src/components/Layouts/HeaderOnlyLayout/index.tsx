/* eslint-disable no-console */
import { useEffect, type FC } from 'react'
import MouseGradientLayout from '~/components/layouts/MouseGradientLayout'
import Header from '~/components/layouts/_components/Header'
import type { TLayoutProps } from '~/domain/ui/types/TLayoutProps'
import { IconBrandGithub, IconFileCv, IconBrandLinkedin, IconHome, IconMail } from '@tabler/icons-react'
import { FloatingDock } from '~/components/3rd/aceternity/floating-dock'

type Props = TLayoutProps

const HeaderOnlyLayout: FC<Props> = ({ children }) => {
  useEffect(() => {
    console.log('HeaderOnlyLayout rendered')
  }, [])

  const links = [
    {
      title: 'Home',
      icon: <IconHome className='h-full w-full text-[#64ffda]' />,
      href: '/',
    },
    {
      title: 'Experience',
      icon: <IconFileCv className='h-full w-full text-[#64ffda]' />,
      href: '/experience',
    },
    {
      title: 'Contact',
      icon: <IconMail className='h-full w-full text-[#64ffda]' />,
      href: '/contact',
    },
    {
      title: 'GitHub',
      icon: <IconBrandGithub className='h-full w-full text-[#64ffda]' />,
      href: 'https://github.com/bachlex03',
    },
    {
      title: 'LinkedIn',
      icon: <IconBrandLinkedin className='h-full w-full text-[#64ffda]' />,
      href: 'https://www.linkedin.com/in/lxbach1608/',
    },
  ]

  return (
    <div className='dark bg-background min-h-screen'>
      {/* <Header /> */}
      <MouseGradientLayout>{children}</MouseGradientLayout>
      <FloatingDock items={links} />
    </div>
  )
}

export default HeaderOnlyLayout

/* eslint-disable no-console */
import { useEffect, type FC } from 'react'
import MouseGradientLayout from '~/components/layouts/MouseGradientLayout'
import Header from '~/components/layouts/_components/Header'
import type { TLayoutProps } from '~/domain/ui/types/TLayoutProps'

type Props = TLayoutProps

const HeaderOnlyLayout: FC<Props> = ({ children }) => {
  useEffect(() => {
    console.log('HeaderOnlyLayout rendered')
  }, [])

  return (
    <div className='dark bg-background min-h-screen'>
      <Header />
      <MouseGradientLayout>{children}</MouseGradientLayout>
    </div>
  )
}

export default HeaderOnlyLayout

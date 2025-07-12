/* eslint-disable no-console */
import { useEffect, type FC } from 'react'
import MouseGradientLayout from '~/components/layouts/MouseGradientLayout'
import Header from '~/components/layouts/_components/Header'
import { type TLayoutProps } from '~/domain/ui/types/TLayoutProps'

type Props = TLayoutProps & {
  showHeader?: boolean
}

const DefaultLayout: FC<Props> = ({ children, showHeader = true }) => {
  useEffect(() => {
    console.log('DefaultLayout rendered')
  }, [])

  return (
    <div className='dark bg-background min-h-screen'>
      {showHeader && <Header />}
      <MouseGradientLayout>{children}</MouseGradientLayout>
    </div>
  )
}

export default DefaultLayout

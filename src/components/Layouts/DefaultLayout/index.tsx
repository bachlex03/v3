/* eslint-disable no-console */
import { useEffect, type FC } from 'react'
import type { ILayoutProps } from '~/domain/ui/interfaces/ILayoutProps'
import MouseGradientLayout from '~/components/Layouts/MouseGradientLayout'
import Header from '~/components/Layouts/Components/Header'

interface Props extends ILayoutProps {}

const DefaultLayout: FC<Props> = ({ children }) => {
  useEffect(() => {
    console.log('DefaultLayout rendered')
  }, [])

  return (
    <div className='dark bg-background min-h-screen'>
      <Header />
      <MouseGradientLayout>{children}</MouseGradientLayout>
    </div>
  )
}

export default DefaultLayout

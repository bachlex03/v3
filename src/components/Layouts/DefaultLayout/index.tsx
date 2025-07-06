/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { useEffect, type FC } from 'react'
import type { ILayoutProps } from '~/domain/ui/interfaces/ILayoutProps'
import MouseGradientLayout from '~/components/Layouts/MouseGradientLayout'

interface DefaultLayoutProps extends ILayoutProps {}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  useEffect(() => {
    console.log('DefaultLayout rendered')
  }, [])

  return (
    <div className='dark bg-background min-h-screen'>
      <MouseGradientLayout>{children}</MouseGradientLayout>
    </div>
  )
}

export default DefaultLayout

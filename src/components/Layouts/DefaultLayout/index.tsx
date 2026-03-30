/* eslint-disable no-console */
import { useEffect, type FC } from 'react'
import MouseGradientLayout from '~/components/Layouts/MouseGradientLayout'
import type { TLayoutProps } from '~/domain/ui/types/TLayoutProps'

type Props = TLayoutProps

const DefaultLayout: FC<Props> = ({ children }) => {
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

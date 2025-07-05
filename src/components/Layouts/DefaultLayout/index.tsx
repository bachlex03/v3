/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { useEffect, type FC } from 'react'
import type { ILayoutProps } from '~/domain/ui/interfaces/ILayoutProps'

interface DefaultLayoutProps extends ILayoutProps {}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  useEffect(() => {
    console.log('DefaultLayout rendered')
  }, [])

  return (
    <div>
      <h1>Default Layout</h1>
      {children}
    </div>
  )
}

export default DefaultLayout

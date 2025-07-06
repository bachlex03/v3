/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { useEffect, type FC } from 'react'
import type { ILayoutProps } from '~/domain/ui/interfaces/ILayoutProps'
import DefaultLayout from '../DefaultLayout'

interface ExperienceLayoutProps extends ILayoutProps {}

const ExperienceLayout: FC<ExperienceLayoutProps> = ({ children }) => {
  useEffect(() => {
    console.log('ExperienceLayout rendered')
  }, [])

  return (
    <DefaultLayout>
      <div className='lg:w-[85vw] h-screen mx-auto'>{children}</div>
    </DefaultLayout>
  )
}

export default ExperienceLayout

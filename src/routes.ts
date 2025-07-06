import { HomePage, ExperiencePage } from '~/pages'
import { DefaultLayout, ExperienceLayout } from '~/components/Layouts'
import type { ILayoutProps } from '~/domain/ui/interfaces/ILayoutProps'
import type { ComponentType } from 'react'

type Route = {
  path: string
  component: ComponentType
  layout?: ComponentType<ILayoutProps>
}

const publicRoutes: Route[] = [
  {
    path: '/',
    component: HomePage,
    layout: DefaultLayout,
  },
  {
    path: '/experience',
    component: ExperiencePage,
    layout: ExperienceLayout,
  },
]
const privateRoutes: Route[] = []

const routes = [...publicRoutes, ...privateRoutes]

export default routes

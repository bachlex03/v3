import { HomePage, ExperiencePage } from '~/pages'
import { DefaultLayout, ExperienceLayout } from '~/components/layouts'
import type { TLayoutProps } from '~/domain/ui/types/TLayoutProps'
import type { ComponentType } from 'react'

type Route = {
  path: string
  component: ComponentType
  layout?: ComponentType<TLayoutProps>
  showHeader?: boolean
}

const publicRoutes: Route[] = [
  {
    path: '/',
    component: HomePage,
    layout: DefaultLayout,
    showHeader: true,
  },
  {
    path: '/home',
    component: HomePage,
    layout: DefaultLayout,
    showHeader: true,
  },
  {
    path: '/experience',
    component: ExperiencePage,
    layout: ExperienceLayout,
    showHeader: true,
  },
]
const privateRoutes: Route[] = []

const routes = [...publicRoutes, ...privateRoutes]

export default routes

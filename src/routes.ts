import { HomePage, ExperiencePage, ContactPage } from '~/pages'
import { HeaderOnlyLayout } from '~/components/Layouts'
import type { TLayoutProps } from '~/domain/ui/types/TLayoutProps'
import type { ComponentType } from 'react'

type Route = {
  path: string
  component: ComponentType
  layout?: ComponentType<TLayoutProps>
}

const publicRoutes: Route[] = [
  {
    path: '/',
    component: HomePage,
    layout: HeaderOnlyLayout,
  },
  {
    path: '/resume',
    component: ExperiencePage,
    layout: HeaderOnlyLayout,
  },
  {
    path: '/contact',
    component: ContactPage,
    layout: HeaderOnlyLayout,
  },
]
const privateRoutes: Route[] = []

const routes = [...publicRoutes, ...privateRoutes]

export default routes

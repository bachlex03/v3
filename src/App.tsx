/* eslint-disable no-console */
import { useEffect, type FC } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import routes from '~/routes'
import { DefaultLayout } from './components/layouts'
import type { TLayoutProps } from './domain/ui/types/TLayoutProps'

function App() {
  useEffect(() => {
    console.log('App rendered')
  }, [])

  return (
    <Router>
      <Routes>
        {routes.map((route, index) => {
          const Page = route.component

          let Layout: FC<TLayoutProps> = DefaultLayout

          if (route.layout) {
            Layout = route.layout as FC<TLayoutProps>
          }

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          )
        })}
      </Routes>
    </Router>
  )
}
export default App

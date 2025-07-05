/* eslint-disable no-console */
import { useEffect, type FC, type ReactNode } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import routes from '~/routes'
import { DefaultLayout } from './components/Layouts'

function App() {
  useEffect(() => {
    console.log('App rendered')
  }, [])

  return (
    <Router>
      <Routes>
        {routes.map((route, index) => {
          const Page = route.component

          let Layout: FC<{
            children: ReactNode
          }> = DefaultLayout

          if (route.layout) {
            Layout = route.layout as FC<{
              children: ReactNode
            }>
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

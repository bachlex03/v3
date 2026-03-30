/* eslint-disable no-console */
import { useState, useCallback, type FC } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

import routes from '~/routes'
import { DefaultLayout } from './components/Layouts'
import type { TLayoutProps } from './domain/ui/types/TLayoutProps'
import Loader from './components/app/Loader'

const LOADER_SHOWN_KEY = 'portfolio_loader_shown'

function App() {
  const hasSeenLoader = sessionStorage.getItem(LOADER_SHOWN_KEY) === 'true'
  const [isLoading, setIsLoading] = useState(!hasSeenLoader)
  const [showContent, setShowContent] = useState(hasSeenLoader)

  const handleLoaderFinish = useCallback(() => {
    sessionStorage.setItem(LOADER_SHOWN_KEY, 'true')
    setIsLoading(false)
    // Small delay before content appears for smoother transition
    setTimeout(() => setShowContent(true), 100)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <Loader onFinish={handleLoaderFinish} />
          </motion.div>
        )}
      </AnimatePresence>

      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
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
        </motion.div>
      )}
    </>
  )
}
export default App

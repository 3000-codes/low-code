import { createBrowserRouter } from 'react-router-dom'

// import Index from '@/layout/Index'
import Home from '@/layout/Home'
import CanvasDemo from '@/layout/CanvasDemo'
import ErrorPage from '@/layout/ErrorPage'
import NotFound from '@/layout/NotFound'

// const errorElement = (<div>Oops! There was an error.</div>)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/canvas-demo',
    element: <CanvasDemo />
  },
  {
    path: '/404',
    element: <NotFound />
  }
])

export default router

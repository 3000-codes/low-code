import { createBrowserRouter } from 'react-router-dom'

// import Index from '@/layout/Index'
import Home from '@/layout/Home'
import ErrorPage from '@/layout/ErrorPage'
import NotFound from '@/layout/NotFound'
import Login from '@/layout/Login'
import ProtectedRoute from '@/components/ProtectedRoute'

// const errorElement = (<div>Oops! There was an error.</div>)

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/list',
        element: <div>List</div>,
        errorElement: <ErrorPage />
      }
    ]
  },
  {
    path: '/404',
    element: <NotFound />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default router

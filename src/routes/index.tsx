import { createBrowserRouter } from 'react-router-dom'

// import Index from '@/layout/Index'
import Home from '@/layout/Home'
import CanvasDemo from '@/layout/CanvasDemo'
import ErrorPage from '@/layout/ErrorPage'
import NotFound from '@/layout/NotFound'
import Game from '@/games/ToHellWithJohnny'

// const errorElement = (<div>Oops! There was an error.</div>)

const router = createBrowserRouter([
  {
    path: '/',
    // element 与 component 二选一
    // element传入的是jsx，component传入的是组件
    // element: <Home />,
    Component: Home,
    errorElement: <ErrorPage />
  },
  {
    path: '/canvas-demo',
    element: <CanvasDemo />
  },
  {
    path: '/game',
    element: <Game />
  },
  {
    path: '/404',
    element: <NotFound />
  }
])

export default router

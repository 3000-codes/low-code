import { FC } from 'react'
import { useRouteError } from 'react-router-dom'
import { RouteError } from '@/typing'

const ErrorPage: FC = () => {
  const error = useRouteError() as RouteError
  console.error(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage

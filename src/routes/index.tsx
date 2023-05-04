import { createBrowserRouter } from 'react-router-dom'
import Home from '@/layout/Home'
import Contact from '@/layout/Home/Contact'
import EditContact from '@/layout/Home/Edit'
import ErrorPage from '@/layout/ErrorPage'
import NotFound from '@/layout/NotFound'

// import { getContacts, createContact, getContact } from '@/contacts'
import { contactsLoader, contactLoader } from '@/utils/loaders'
import { contactsAction } from '@/utils/actions'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: contactsLoader,
    action: () => contactsAction,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        loader: contactLoader
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact />,
        loader: contactLoader
      }
    ]
  },
  {
    path: '/404',
    element: <NotFound />
  }
])

export default router

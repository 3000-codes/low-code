import { FC } from 'react'
import {
  useLoaderData,
  Outlet,
  Form,
  NavLink,
  useNavigation
} from 'react-router-dom'
import { IContact } from '@/typing'

const Home: FC = () => {
  const contacts = useLoaderData() as IContact[]
  const navigation = useNavigation()
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length
            ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive ? 'active' : isPending ? 'pending' : ''
                    }
                  >
                    {contact.first || contact.last
                      ? (
                      `${contact.first} ${contact.last}`
                        )
                      : (
                      <i>No Name</i>
                        )}
                  </NavLink>
                </li>
              ))}
            </ul>
              )
            : (
            <p>
              <i>No contacts</i>
            </p>
              )}
        </nav>
      </div>
      <div
        id="detail"
        className={navigation.state === 'loading' ? 'loading' : ''}
      >
        <Outlet />
      </div>
    </>
  )
}

export default Home

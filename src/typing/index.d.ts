export type RouteError = {
  statusText: string
  message: string
  data: string
  status: number
  internal: boolean
  error: Error
}

type Contact = {
  id: string
  createdAt: number
  favorite: boolean
  first: string
  last: string
  avatar: string
  twitter: string
  notes: string
}

export type IContact = Partial<Contact>

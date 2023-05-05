import type { LoaderFunctionArgs } from 'react-router-dom'
import { getContacts, getContact } from '@/contacts'

export const contactsLoader = () => getContacts()

export const contactLoader = ({ params }: LoaderFunctionArgs) => getContact(params.contactId!)

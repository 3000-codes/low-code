import { redirect, ActionFunctionArgs } from 'react-router-dom'
import { createContact, updateContact, deleteContact } from '@/contacts'

export const createAction = async () => {
  const contacts = await createContact()
  return redirect(`/contacts/${contacts.id}/edit`)
}

export const updateContactAction = async ({ request, params }: ActionFunctionArgs) => {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData)
  await updateContact(params.contactId!, updates)
  return redirect(`/contacts/${params.contactId}`)
}

export const deleteContactAction = async ({ params }: ActionFunctionArgs) => {
  // throw new Error('Not implemented')
  await deleteContact(params.contactId!)
  return redirect('/contacts')
}

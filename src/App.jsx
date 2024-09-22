import HeaderItem from './components/Header'
import { useState, useEffect } from 'react'
import ContactForm from './components/FormIndex'
import ContactList from './components/ContactList'
import { v4 as uuidv4 } from 'uuid'

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts')
    return savedContacts ? JSON.parse(savedContacts) : []
  })
  const [contactToEdit, setContactToEdit] = useState(null)

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const addContact = (contact) => {
    contact.id = uuidv4()
    setContacts([...contacts, contact])
  }

  const editContact = (updatedContact) => {
    setContacts(
      contacts.map((contact) =>{
        contact.id === updatedContact.id ? updatedContact : contact
      })
    )
    setContactToEdit(null)
  }

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id))
  }

  return (
    <div>
      <HeaderItem />
      
      <ContactForm
        addContact={addContact}
        editContact={editContact}
        contactToEdit={contactToEdit}
      />
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        setContactToEdit={setContactToEdit}
      />
    </div>
  )
}

export default App

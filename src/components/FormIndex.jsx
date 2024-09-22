import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import './FormIndex.css'

const ContactForm = ({ addContact, editContact, contactToEdit }) => {
  const [contact, setContact] = useState({ name: '', phone: '', email: '' })

  useEffect(() => {
    if (contactToEdit) {
      setContact(contactToEdit)
    }
  }, [contactToEdit])

  const handleChange = (e) => {
    const { name, value } = e.target
    setContact({ ...contact, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if (contactToEdit) {
      editContact(contact)
    } else {
      addContact(contact)
    }
    setContact({ name: '', phone: '', email: '' })
  }

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
        <div className="nome">
            <span> Nome: </span>
            <input type="text" name="name" placeholder="Nome" value={contact.name} onChange={handleChange} required />
        </div>
        <div className="telefone">
            <span> Telefone: </span>
            <input type="text" name="phone" placeholder="Telefone" value={contact.phone} onChange={handleChange} required />
        </div>
        <div className="email">
            <span> Email: </span>
            <input type="email" name="email" placeholder="Email" value={contact.email} onChange={handleChange} required />
        </div>
        <button className="formButton" type="submit">{contactToEdit ? 'Salvar Edição' : 'Adicionar Contato'}</button>
    </form>
  )
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
  editContact: PropTypes.func,
  contactToEdit: PropTypes.object.isRequired
}

export default ContactForm

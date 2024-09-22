import PropTypes from 'prop-types'
import ContactItem from './ContactData'

const ContactList = ({ contacts, deleteContact, setContactToEdit }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
          setContactToEdit={setContactToEdit}
        />
      ))}
    </div>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func,
  setContactToEdit: PropTypes.func,
}

export default ContactList

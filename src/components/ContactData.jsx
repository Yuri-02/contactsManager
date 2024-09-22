import PropTypes from 'prop-types'
import './ContactData.css'

const ContactItem = ({ contact, deleteContact, setContactToEdit }) => {

  

  return (
    <div className="dataContainer">
      <ul className="unorderedList">
        <li className="dataContactList">
          <div className="nameList">
            <h2> Nome </h2>
            <h3>{contact.name}</h3>
          </div>
          <div className="phoneList">
            <h2> Telefone </h2>
            <p>{contact.phone}</p>
          </div>
          <div className="emailList">
            <h2> Email </h2>
            <p>{contact.email}</p>
          </div>
          <button className="editButton" onClick={() => setContactToEdit(contact)}> <img className="editIcon" src="https://cdn-icons-png.freepik.com/512/32/32355.png" alt="Edit icon" /> </button>
          <button className="binButton" onClick={() => deleteContact(contact.id)}> <img className="binIcon" src="https://cdn-icons-png.freepik.com/512/484/484662.png" alt="Bin icon" /> </button>
        </li>
      </ul>
    </div>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func,
  setContactToEdit: PropTypes.func,
}

export default ContactItem

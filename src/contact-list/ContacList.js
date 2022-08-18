import './ContactList.scss';

function ContactItem(props) {

    return (
        <ul>
            {props.contacts.map(contact =>
                <li className='contact' key={contact.id}>
                    <input type="checkbox" />
                    <span className="contact-emoji">{contact.emoji?.emoji}</span>
                    <div className="contact-field name" type="text">{contact.name}</div>
                    <div className="contact-field phone" type="text">{contact.phone}</div>
                    <input
                        className='delete-contact'
                        type='button'
                        onClick={(e) => props.onDeleteContact(contact.id)}
                        value='Delete Contact'></input>
                </li>
            )}
        </ul>
    );
}

export default ContactItem;
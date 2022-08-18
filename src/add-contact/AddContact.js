import { useState } from 'react';
import Emoji from '../emoji/Emoji';
import './AddContact.scss';

function AddContact(props) {
    const emptyContact = { emoji: { emoji: '' }, name: '', phone: '' };
    const [contact, setContact] = useState(emptyContact);
    const [hidden, setHidden] = useState(true);

    return (
        <div className="add-contact">
            <Emoji hidden={hidden} onAddEmoji={(emojiObj) => {
                setContact({ ...contact, emoji: emojiObj });
                setHidden(true);
            }} />
            <form className='contact-form'>
                <label> Emoji <input id="emoji" type="submit" name="emoji" value='select emoji'
                    onClick={(e) => {
                        e.preventDefault();
                        setHidden(!hidden);
                    }} />
                </label>
                <span className='contact-emoji'>{contact.emoji?.emoji}</span>
                <label>Name<input id="name" type="text" name="name" value={contact.name}
                    onChange={e => setContact({ ...contact, name: e.target.value })} />
                </label>
                <label>Phone number<input id="phone" type="text" name="phone" value={contact.phone}
                    onChange={e => setContact({ ...contact, phone: e.target.value })} />
                </label>
                <input type="submit" value='Save Contact' onClick={(e) => {
                    e.preventDefault();
                    props.onAddContact(contact);
                    setContact(emptyContact);
                }} />
            </form>
        </div >
    );
}

export default AddContact;
import style from "./ContactList.module.css"

import Contact from "../Contact/Contact";

export default function ContactList({ contactArray, onDelete }) {

   
    return (
     
    <ul className={style.list}>
        { contactArray.map((contacts) =>
        <li className={style.item} key={contacts.id}>
                <Contact
                    userName={contacts.name}
                    phoneNumber={contacts.number}
                    contactId={contacts.id}
                    onDelete={onDelete}
                />
        </li>
            )}
    </ul>
        
)

}
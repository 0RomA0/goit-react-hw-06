import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import style from "./Contact.module.css"

export default function Contact({ userName, phoneNumber,  contactId, onDelete }) {
    return (
        <>
            <div className={style.containerText}>
                <p className={ style.text}> <IoMdPerson /> {userName} </p>
                <p className={style.text}> <FaPhoneAlt /> {phoneNumber} </p>
            </div>
        <button className={ style.btn } onClick={() => onDelete(contactId)}> Delete </button>
    </>
        
    )        
}
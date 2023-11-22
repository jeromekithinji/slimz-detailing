import React from 'react'
import "./contactNav.scss"
import { MdOutlinePhoneInTalk, MdOutlineWhatsapp } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";


const ContactNav = () => {
  return (
    <div className="contactNav">
        <div className="contactNav__contact">
            <MdOutlinePhoneInTalk className="contactNav__contact-icon"/>
            <p className="contactNav__contact-text">
                +48 123 456 789
            </p>
        </div>
        <div className="contactNav__socials">
            <FaInstagram className="contactNav__contact-icon"/>
            <MdOutlineWhatsapp className="contactNav__contact-icon"/>
        </div>
    </div>
  )
}

export default ContactNav
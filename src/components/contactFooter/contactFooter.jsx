import React from 'react'
import "./contactFooter.scss"

const ContactFooter = () => {
  return (
    <div className='contactFooter'>
        <p className="contactFooter__text">
            <span className='textHighlight'>Book</span> your car in with Shaan at Slimz Detailing.
        </p>
        <div className="contactFooter__contacts">
            <p className="contactFooter__contacts-contact">
                <span className='textHighlight'>Locations:</span>  London, Leicester & Nottingham 
            </p>
            <p className="contactFooter__contacts-contact">
                <span className='textHighlight'>Phone:</span> 0700 005006
            </p>
        </div>
    </div>
  )
}

export default ContactFooter
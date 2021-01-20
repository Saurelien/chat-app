import './Contact.css'
import React from 'react'

const name = "Bobby Mitchelle"
const online = true;
const avatar = "https://randomuser.me/api/portraits/men/34.jpg"

function Contact() {
    return (
        <div className="Contact">
            <div className="name">
            <img src={avatar} alt="Picture of a random user">
            </img>
            <h1>{name}</h1>
            {online ? <strong>Is Online</strong> : <strong1>Is Offline</strong1>}
         </div>
        </div>
    )
}

export default Contact;
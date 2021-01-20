import './Contact.css'
import React from 'react'

const online = true;

function Contact() {
    return (
        <div className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/men/34.jpg" alt="Random User"></img>
            <div className="status">
            <h3 className="name">Bobby Mitchelle</h3>
                {online ? <p>Online</p> : <p>Offline</p>}
         </div>
        </div>
    )
}

export default Contact;
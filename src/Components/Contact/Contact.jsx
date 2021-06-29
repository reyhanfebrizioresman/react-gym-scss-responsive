import React from 'react'
import './Contact.scss'
const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="form-group">
                <input type="text" placeholder="Input Real Name"/>
            </div>
            <div className="form-group">
                <input type="email" placeholder="Input Real Email"/>
            </div>
            <div className="form-group">
                <textarea name="" placeholder="Type Your Message"></textarea>
            </div>
            <a href="" className="btn">SUBMIT</a>
        </div>
    )
}

export default Contact

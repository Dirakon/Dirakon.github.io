import React from "react";
import './../styles/ContactForm.css'
import * as emailjs from "emailjs-com"
const ContactForm = function (props) {
    return <div className="contactForm">
        <form onSubmit={submitClicked}>
            <label className="formLabel" htmlFor="name">Name</label>
            <input className="formField" type="text" id="name" name="name"
                placeholder="Your name.." />

            <label className="formLabel" htmlFor="email">E-mail<a style={{ color: "red" }}>*</a></label>
            <input className="formField" type="text" id="email" name="email"
                placeholder="Your E-mail.." />

            <label className="formLabel" htmlFor="subject">Subject</label>
            <textarea className="formField" id="subject" name="subject"
                placeholder="Write something.." style={{ height: '10vw' }}></textarea>

            <input className="formButton" type="submit" value="Submit" />
        </form>
    </div>
}

function submitClicked(event) {
    event.preventDefault()
    if (!isEmail(event.target['email'].value)) {
        return;
    }
    const userID = process.env.REACT_APP_EMAILJS_USER_ID
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID
    emailjs.sendForm(serviceID, templateID, event.target, userID)
        .then((result) => {
            alert('email sent successfully');
        }, (error) => {
            alert('error sending email');
        });
    event.target.reset();
}

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}

export default ContactForm;
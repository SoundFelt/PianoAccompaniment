import { useState } from 'react'
import emailjs from '@emailjs/browser';

import './styles/ContactForm.css'

const ContactForm = () => {

    const [values, setValues] = useState({name: '', email: '', phone: '', message: ''})
    const [messageSubmitted, setMessageSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        emailjs.send('service_ltlg4es', 'accomp_contact_form', values, 'user_MGZK3YXE2haM8nsBL7UMW').then(() => console.log('email sent'))
        setLoading(false)
        setMessageSubmitted(true)
        setValues({fullName: '', email: '', phone: '', message: ''})
        setTimeout(() => {
            setMessageSubmitted(false)
        }, 10000)
    }

  return (
    <div className="contact-form-background">
        <div className="contact-form-container">
            <div className="form-titles-container">
                <p className="form-title">Send a message</p>
                <p className="form-sub-title">If you are enquiring about accompaniment for your upcoming event, please let me know how long you wish rehearsal sessions to be, and details of the event including the date, location and repertoire. </p>
            </div>
            <div className="fields-container">
                <form onSubmit={handleSubmit} className="form">
                    <div className="name-container field-container">
                        <p>Name:<span style={{color: 'red'}}> *</span></p>
                        <input className="input-box" value={values.fullName} required type="text" name="name" onChange={handleChange} placeholder="Full name"/>
                    </div>
                    <div className="email-container field-container">
                        <p>Email:<span style={{color: 'red'}}> *</span></p>
                        <input className="input-box" value={values.email} required type="email" name="email" onChange={handleChange} placeholder="Email address"/>
                    </div>
                    <div className="phone-container field-container">
                        <p>Phone:</p>
                        <input className="input-box" value={values.phone} required type="number" name="phone" onChange={handleChange} placeholder="Contact number"/>
                        <p className="phone-sub-text">Please enter your number if you prefer for me to call you back</p>
                    </div>
                    <div className="message-container field-container">
                        <p>Message:<span style={{color: 'red'}}> *</span></p>
                        <textarea value={values.message} required type="text" name="message" onChange={handleChange} placeholder="Your message"/>
                    </div>
                    { messageSubmitted ? 
                        <div className="submitted-container">
                            <p className="submitted-message">Thank you for your message! I will get back to you shortly. 🎶</p>
                        </div>
                     :
                        <div className="button-container">
                            <button className="submit-button">{loading ? <div className="loader"></div>: 'Submit'}</button>
                        </div>
                    }
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactForm
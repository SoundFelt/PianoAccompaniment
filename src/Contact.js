import './styles/Contact.css'
import ContactForm from './ContactForm.js'

import EmailIcon from './images/Email.png'
import LocationIcon from './images/Location.png'
import MusicArt from './images/MusicArt.png'

const Contact = () => {
  return (
    <div id="contact" className="contact-background">
        <div className="contact-container">
            <img className="music-art" src={MusicArt} alt="music-art"/>
            <div className="contact-title-container">
                <p className="contact-word">Contact</p>
                <p className="underline">_______</p>
            </div>
            <div className="contact-halves">
                <div className="contact-left">
                    <div className="contact-info">
                        <p className="contact-title">Get In Touch</p>
                        <p className="contact-sub-title">Please contact me via the email listed below or use the form to send me a message. I aim to respond to all enquiries within 24 hours. </p>
                    </div>
                    <div className="contact-details contact-email">
                        <img src={EmailIcon} style={{width: '20px', height: '20px'}} alt="email-icon"/>
                        <p>ruthxuan.piano@gmail.com</p>
                    </div>
                    <div className="contact-details contact-location">
                        <img src={LocationIcon} style={{width: '20px', height: '20px'}} alt="location-icon"/>
                        <p>London, UK</p>
                    </div>
                    <div className="contact-map">
                    <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19868.769851170044!2d-0.17022094615643324!3d51.50227660119539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876055b79d2db6d%3A0x1efce6d88f06972!2sRoyal%20College%20of%20Music!5e0!3m2!1sen!2suk!4v1662807129501!5m2!1sen!2suk"  style={{width: '100%', height: '570px', border: '0'}} allowfullscreen="" loading="lazy" title="google-map" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="contact-right">
                    <ContactForm/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
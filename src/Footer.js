import './styles/Footer.css'
import RuifanLogo from './images/RuifanLogo.png'
import FacebookIcon from './images/Facebook.png'
import EmailIcon from './images/EmailDark.png'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className="footer-background">
        <div className="footer-container-desktop">
            <div className="footer-left">
                <Link to="home" smooth={true} duration={1000}><img className="footer-logo" src={RuifanLogo} alt="footer-logo"/></Link>
                <p className="footer-copyright">Copyright © Ruifan Xuan 2022</p>
                <p className="footer-sub-text">UK Piano Accompaniment</p>
            </div>
            <div className="footer-center">
                <p className="contact-footer-word">Contact</p>
                <div className="facebook-contact">
                    <img className="facebook-icon" src={FacebookIcon} style={{width: '30px'}} alt="facebook-icon"/>
                    <a href="https://www.facebook.com/profile.php?id=100009972249936">Facebook</a>
                </div>
                <div className="email-contact">
                    <img className="email-logo" src={EmailIcon} style={{width: '30px'}} alt="email-logo"/>
                    <a href="mailto:ruthxuan.piano@gmail.com">ruthxuan.piano@gmail.com</a>
                </div>
            </div>
            <div className="footer-right">
                <p className="site-navigation-word">Site Navigation</p>
                <div className="site-links-footer">
                    <div className="links-set-1">
                        <Link to="home" smooth={true} duration={1000}>Home</Link>
                        <Link to="biography" smooth={true} duration={1000}>Biography</Link>
                        <Link to="gallery" smooth={true} duration={1000}>Gallery</Link>
                    </div>
                    <div className="links-set-2">
                        <Link to="testimonials" smooth={true} duration={1000}>Testimonials</Link>
                        <Link to="pricing" smooth={true} duration={1000}>Pricing</Link>
                        <Link to="contact" smooth={true} duration={1000}>Contact</Link>
                    </div>
                </div>
                <p className="footer-made-with">Made with ♥ - AnthonyWebDev</p>
            </div>
        </div>

        <div className="footer-container-mobile">
            <div className="footer-top">
                <div className="footer-top-left">
                    <Link to="home" smooth={true} duration={1000}><img className="footer-logo" src={RuifanLogo} alt="footer-logo"/></Link>
                    <p className="footer-copyright">Copyright © Ruifan Xuan 2022</p>
                    <p className="footer-sub-text">UK Piano Accompaniment</p>
                </div>
                <div className="footer-top-right">
                <p className="contact-footer-word">Contact</p>
                    <div className="facebook-contact">
                        <img className="facebook-icon" src={FacebookIcon} style={{width: '30px'}} alt="facebook-icon"/>
                        <a href="https://www.facebook.com/profile.php?id=100009972249936">Facebook</a>
                    </div>
                    <div className="email-contact">
                        <img className="email-logo" src={EmailIcon} style={{width: '30px'}} alt="email-logo"/>
                        <a href="mailto:ruthxuan.piano@gmail.com">ruthxuan.piano@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="site-links-footer">
                    <Link to="home" smooth={true} duration={1000}>Home</Link>
                    <Link to="biography" smooth={true} duration={1000}>Biography</Link>
                    <Link to="gallery" smooth={true} duration={1000}>Gallery</Link>
                    <Link to="testimonials" smooth={true} duration={1000}>Testimonials</Link>
                    <Link to="pricing" smooth={true} duration={1000}>Pricing</Link>
                    <Link to="contact" smooth={true} duration={1000}>Contact</Link>
                </div>
                <p className="footer-made-with">Made with ♥ - AnthonyWebDev</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
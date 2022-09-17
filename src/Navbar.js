import { useState } from 'react'
import './styles/Navbar.css'
import Logo from './images/RuifanLogo.png'
import { Link } from 'react-scroll'

import Hamburger from './images/Hamburger.png'
import Close from './images/Close.png'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const [firstMenuClick, setFirstMenuClick] = useState(true)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
        firstMenuClick && setFirstMenuClick(false)
    }

  return (
    <div className="navbar-container">
        <div className="navbar-content">
            <div className="nav-left nav-links">
                <Link to="home" smooth={true} duration={1000}>Home</Link>
                <Link to="biography" smooth={true} duration={1000}>Biography</Link>
                <Link to="gallery" smooth={true} duration={1000}>Gallery</Link>
            </div>
            <div className="nav-middle">
                <img className="logo" src={Logo} alt="logo"/>
            </div>
            <div className="nav-right nav-links">
                <Link to="testimonials" smooth={true} duration={1000}>Testimonials</Link>
                <Link to="pricing" smooth={true} duration={1000}>Pricing</Link>
                <Link to="contact" smooth={true} duration={1000}>Contact</Link>
            </div>
        </div>
        <div className="mobile-nav-content">
            <div className="mobile-logo-container">
                <img className="mobile-logo" src={Logo} alt="logo"/>
            </div>   
            { !menuOpen 
                ? <img className="hamburger" src={Hamburger} onClick={toggleMenu} alt="hamburger-icon"/> 
                : <img className="close" src={Close} onClick={() => setMenuOpen(!menuOpen)} alt="close-icon"/> 
            }
            <div className={`menu-container ${firstMenuClick ? '' : menuOpen ? 'menu-container-open' : 'menu-container-closed'}`}>
                <div className="open-menu-links">
                    <Link to="home" smooth={true} duration={1000} onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="biography" smooth={true} duration={1000} onClick={() => setMenuOpen(false)}>Biography</Link>
                    <Link to="gallery" smooth={true} duration={1000} onClick={() => setMenuOpen(false)}>Gallery</Link>
                    <Link to="testimonials" smooth={true} duration={1000} onClick={() => setMenuOpen(false)}>Testimonials</Link>
                    <Link to="pricing" smooth={true} duration={1000} onClick={() => setMenuOpen(false)}>Pricing</Link>
                    <Link to="contact" smooth={true} duration={1000} onClick={() => setMenuOpen(false)}>Contact</Link>
                </div>
            </div> 
        </div>     
    </div>
  )
}

export default Navbar
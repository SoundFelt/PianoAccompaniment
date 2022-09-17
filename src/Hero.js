import Navbar from './Navbar'
import { Link } from 'react-scroll'

import DownArrow from './images/DownArrow.png'

import './styles/Hero.css'

const Hero = () => {
  return (
    <div id="home" className="hero-container">
        <Navbar/>
        <div className="hero-content-container">
            <div className="main-text-container">
                <h1 className="main-text">Professional Concert Pianist & Accompanist</h1>
            </div>
            <div className="secondary-text-container">
                <h1 className="secondary-text">Over 20 years of experience performing with all instrumentalists and vocalists, in examinations, recitals, competitions, recordings and special events.</h1>
            </div>
            <div className="find-out-more-container">
                <p>Find out more</p>
                <Link to="biography" smooth={true} duration={1000}><img className="arrow" src={DownArrow} style={{width: '40px'}}/></Link>
          </div>
        </div>
    </div>
  )
}

export default Hero
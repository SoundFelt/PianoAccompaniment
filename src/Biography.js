import './styles/Biography.css'
import QuoteIconLeft from './images/QuotemarkLeft.png'
import BiographyTop from './images/BiographyTop.jpg'
import BiographyTopMobileImage from './images/HeroImage.jpg'
import BiographyBottom from './images/BiographyBottom.png'
import RightArrow from './images/RightArrow.png'

import { Link } from 'react-scroll'

const Biography = () => {
  return (
    <div id="biography" className="biography-background">
        <div className="biography-container">
            <img src={QuoteIconLeft} alt="quote-icon" style={{width: '50px'}}></img>
            <div className="quote-container">
                <div className="quote-left">
                    <div className="quote-left-top">
                        <p className="quote-text">Music is the heart of life. She speaks love; without it, there is no possible good and with it everything is beautiful.</p>
                    </div>
                    <div className="quote-left-bottom">
                        <p className="quote-author">- Franz List</p>
                    </div>
                </div>
            </div>

            <div className="biography-top-container">
                <div className="biography-top-left">
                    <img className="biography-top-image" src={BiographyTop} alt="piano-standing"/>
                    <img className="biography-top-image-mobile" src={BiographyTopMobileImage} alt="piano-standing"/>
                </div>
                <div className="biography-top-right">
                    <p className="biography-word">Biography</p>
                    <p className="biography-title">London Based Professional Collaborative Pianist.</p>
                    <p className="biography-top-content">Ruifan began leaning piano with her mother Professor Cheng at the age of four and started accompanying instrumental players just a few years later. At ten years old, Ruifan was invited to play for the ‘Chenxing’ Choir on the 3rd International Choir Competition of Beijing and together they achieved Bronze Prize. In 2010, Ruifan was offered to study at the China Conservatory Affiliated High School as a professional pianist and since then she continued to play with other instrumentalists building upon her experience as an accompanist. <br/><br/><span className="bio-content-top-desktop">In 2015, Ruifan started her undergraduate degree at the Royal Birmingham Conservatoire under the Irish concert pianist Professor David Quigley. She has since accompanied numerous final examinations, recitals and competitions for students at the Royal Birmingham Conservatoire, University of Birmingham, Royal Northern College of Music, the Royal College of Music and other international conservatoires overseas.  In 2018,  Ruifan accompanied a percussionist on the televised BBC Young Musician Percussion Final and in 2019, recorded and released the album ‘Mozart – The Complete Four Hand Piano Sonatas’.</span> </p>
                </div>
            </div>

            <p className="mobile-bio-content-top">In 2015, Ruifan started her undergraduate degree at the Royal Birmingham Conservatoire under the Irish concert pianist Professor David Quigley. She has since accompanied numerous final examinations, recitals and competitions for students at the Royal Birmingham Conservatoire, University of Birmingham, Royal Northern College of Music, the Royal College of Music and other international conservatoires overseas.  In 2018,  Ruifan accompanied a percussionist on the televised BBC Young Musician Percussion Final and in 2019, recorded and released the album ‘Mozart – The Complete Four Hand Piano Sonatas’.</p>

            <div className="biography-bottom-container">
                <div className="biography-bottom-left">
                    <p className="biography-bottom-content">Ruifan received an offer in 2019 from the Royal College of Music in London to study for her Masters Degree under the British concert pianist Professor Gordon Fergus Thompson. After successfully graduating two years later she continued on at the conservatoire, achieving the highly respected level 8 Artist Diploma qualification in 2021. <br/><br/><span className="bio-content-bottom-desktop">As a professional collaborative pianist, Ruifan is trustworthy and reliable, with the aim of making every rehearsal as effective and productive that it possibly can be, bringing out the best qualities of musicianship. With a wide range of repertoire accumulated over two decades of playing from all different styles and eras, she understands that every performance is a chance to learn something new and develop as a musician. Her goal is to contribute to the success of the musicians that she works with and be inspirational on this music journey together.</span> </p>
                    <Link to="testimonials" smooth={true} duration={1000}>
                        <button className="testimonials-button desktop-button">Read testimonials
                        <img className="right-arrow" src={RightArrow} alt="arrow"/>
                        </button>
                    </Link>
                </div>
                <div className="biography-bottom-right">
                    <img className="biography-bottom-image" src={BiographyBottom} alt="piano-on-stage"/>
                </div>
            </div>

            <p className="mobile-bio-content-bottom">As a professional collaborative pianist, Ruifan is trustworthy and reliable, with the aim of making every rehearsal as effective and productive that it possibly can be, bringing out the best qualities of musicianship. With a wide range of repertoire accumulated over two decades of playing from all different styles and eras, she understands that every performance is a chance to learn something new and develop as a musician. Her goal is to contribute to the success of the musicians that she works with and be inspirational on this music journey together.</p>
            <Link to="testimonials" smooth={true} duration={1000}>
                <button className="testimonials-button mobile-button">Read testimonials
                <img className="right-arrow" src={RightArrow} alt="arrow"/>
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Biography
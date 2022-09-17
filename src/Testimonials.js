import React from 'react'
import './styles/Testimonials.css'

import BeethovenImage from './images/Beethoven.png'
import SchubertImage from './images/SchubertImage.png'
import Testimonial1Image from './images/Testimonial1Image.png'
import Testimonial2Image from './images/Testimonial2Image.png'
import Testimonial3Image from './images/Testimonial3Image.png'
import Testimonial4Image from './images/Testimonial4Image.png'
import Testimonial5Image from './images/Testimonial5Image.png'

const Testimonials = () => {
  return (
    <div id="testimonials" className="testimonials-background">
        <div className="testimonials-container">
            <div className="title-container">
                <p className="testimonials-word">Testimonials</p>
                <p className="underline">______________</p>
            </div>

            <img className="beethoven-image" src={BeethovenImage} alt="beethoven"/>
            <img className="schubert-image" src={SchubertImage} alt="schubert"/>

            <div className="content-container">
                <div className="testimonial">
                    <p className="testimonial-left">“Upon meeting Ruifan for the first time, I was greeted with a bubbly, warm personality and  a focussed attitude towards our projects together. Unsurprisingly, this energy is reflected throughout her playing, boasting spectacular virtuosity and musical flexibility. There is no doubt that Ruifan is an exceptionally talented pianist, complimented by a friendly, down-to-earth aura that makes her a pleasure to work with.”</p>
                    <div className="author-container-left">
                        <img className="author-img" src={Testimonial1Image} alt="author-1"/>
                        <div className="author-details">
                            <p className="author-name">Tom Hall</p>
                            <p className="author-instrument">Percussion</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <p className="testimonial-right">"Ruifan has accompanied me many times for my recitals in the past 4 years, playing music together with her is always joyful. I always notice how quickly she learns the repertoire, only shortly after giving her the scores on the first rehearsal we are already able to play fluently! The best part about it is that the quality of the music is also at such a high level. I feel that Ruifan is able to manage to her time and her practise very efficiently. Her attitude is always very professional and she really cares about what the performer actually wants from the music and all the details rather than just doing her own thing or playing notes without any thought. Finally, I would like to say that Ruifan is a very friendly and kind person who is always a pleasure to work with and I would highly recommend her as your accompanist."</p>
                    <div className="author-container-right">
                        <img className="author-img" src={Testimonial2Image} alt="author-2"/>
                        <div className="author-details">
                            <p className="author-name">Jimmy Yang</p>
                            <p className="author-instrument">Violin</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <p className="testimonial-left">"Ruifan is very a talented pianist, especially in piano accompaniment. During my Concerto competition last week, Ruifan surprised me with such sensitive piano skills and I would like to say that her being my second pianist was an unforgettable experience in my musical journey"</p>
                    <div className="author-container-left">
                        <img className="author-img" src={Testimonial3Image} alt="author-3"/>
                        <div className="author-details">
                            <p className="author-name">Zi Jun Xu</p>
                            <p className="author-instrument">Piano</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial">
                    <p className="4-content testimonial-right">"Ruifan, thank you so much for willing to be my accompanist to help my situation. It was just three days before my recital when Ruifan got the scores of the 15 songs for the first time and none of them were easy! Somehow, she managed to learn everything within the first 48 hours and every song had been brought up to a very high level, she really is like a superwoman! As we know, accompaniment is such an important role and her part helped me a lot during my performance. The individual style of each song and the character changes in-between them, we rehearsed and worked together well, allowing us to communicate with each other through the music... then I got the highest mark for my final recital in the end! I really appreciate that Ruifan was willing to help me out at such short notice and I’m very impressed with her professional skills and the high quality she can bring to music in a short space of time. Thank you so much again, Ruifan!</p>
                    <div className="author-container-right">
                        <img className="author-img" src={Testimonial4Image} alt="author-4"/>
                        <div className="author-details">
                            <p className="author-name">Shirley Jin</p>
                            <p className="author-instrument">Soprano</p>
                        </div>
                    </div>
                </div>
                <div className="testimonial" style={{margin: '0'}}>
                    <p className="5-content testimonial-left">"Ruifan was amazing throughout the whole year being the secondo for my final year CD project. The focus, enthusiasm and professionalism she brought to the whole project was inspiring and I am very appreciative of the amount of time she spent on it with me, especially as it took so much longer to record everything than we initially anticipated! Ruifan is an incredibly talented pianist and accompanist, with the ability to always bring a performance to life no matter the repertoire she plays. I highly recommend her if you are in need of a skilful accompanist that will not let you down. I am of course looking forward to continuing playing and performing duets with her in the future!"</p>
                    <div className="author-container-left">
                        <img className="author-img" src={Testimonial5Image} alt="author-5"/>
                        <div className="author-details">
                            <p className="author-name">Anthony McLean</p>
                            <p className="author-instrument">Piano</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Testimonials

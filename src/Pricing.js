import React from 'react'
import './styles/Pricing.css'

import PricingPanel1 from './images/PricingBG1.png'
import PricingPanel2 from './images/PricingBG2.png'
import PricingPanel3 from './images/PricingBG3.png'
import Tick from './images/Tick.png'

const Pricing = () => {
  return (
    <div id="pricing" className="pricing-background">
        <div className="pricing-container">
            <div className="pricing-titles-container">
                <p className="pricing-bookings-word">Bookings</p>
                <p className="pricing-title">Accompaniment & Event Pricing</p>
                <p className="pricing-sub-title-content">Rates are set based on the amount of time left until your event. You are guaranteed to receive the same high quality musicianship and professionalism from me whether we have months, weeks or just days. </p>
            </div>

            <div className="panels-container">
                <div className="panel-1 panel">
                    <img className="panel-img" src={PricingPanel1}/>
                    <p className="panel-1-title">Standard</p>
                    <p className="panel-sub-title">21+ days until your event</p>
                    <div className="panel-1-prices prices">
                        <p>£60 / 1h session​</p>
                        <p>£110 / 2h session​</p>
                        <p>£150 / 3h session​</p>
                    </div>
                    <div className="tick-points">
                        <div className="tick-point">
                            <img className="tick-icon" src={Tick}/>
                            <p>Transport included inside London​</p>
                        </div>
                        <div className="tick-point">
                            <img className="tick-icon" src={Tick}/>
                            <p>30min & 45min sessions available​​</p>
                        </div>
                    </div>
                    <div className="panel-info">
                        <p>Exams: <b>£50 - £150</b> (Depending on individual situation)<br/><br/>
                        Recitals & Competitions: <b>£100 - £300</b> (Depending on individual situation)<br/><br/>
                        There may be additional transport costs for events or rehearsals outside London.</p>
                    </div>
                    <div className="panel-button">
                        <button className="contact-button-1">CONTACT TO BOOK</button>
                    </div>
                </div>
                <div className="panel-2 panel">
                    <img className="panel-img" src={PricingPanel2}/>
                    <p className="panel-2-title">Upcoming</p>
                    <p className="panel-sub-title">8-20 days until your event</p>
                    <div className="panel-2-prices prices">
                        <p>£80 / 1h session​</p>
                        <p>£140 / 2h session​</p>
                        <p>£200 / 3h session​</p>
                    </div>
                    <div className="tick-points">
                        <div className="tick-point">
                            <img className="tick-icon" src={Tick}/>
                            <p>Transport included inside London​</p>
                        </div>
                        <div className="tick-point">
                            <img className="tick-icon" src={Tick}/>
                            <p>30min & 45min sessions available​​</p>
                        </div>
                    </div>
                    <div className="panel-info">
                        <p>Exams: <b>£100 - £200</b> (Depending on individual situation)<br/><br/>
                        Recitals & Competitions: <b>£200 - £400</b> (Depending on individual situation)<br/><br/>
                        There may be additional transport costs for events or rehearsals outside London.</p>
                    </div>
                    <div className="panel-button">
                        <button className="contact-button-2">CONTACT TO BOOK</button>
                    </div>
                </div>
                <div className="panel-3 panel">
                    <img className="panel-img" src={PricingPanel3}/>
                    <p className="panel-3-title">Urgent</p>
                    <p className="panel-sub-title">7 days or less until your event​</p>
                    <div className="panel-3-prices prices">
                        <p>£100ph</p>
                        <p className="panel-3-price-sub-text">Fixed hourly rate per session</p> 
                    </div>
                    <div className="tick-points">
                        <div className="tick-point">
                            <img className="tick-icon" src={Tick}/>
                            <p>Transport included inside London​</p>
                        </div>
                        <div className="tick-point">
                            <img className="tick-icon" src={Tick}/>
                            <p>30min & 45min sessions available​​</p>
                        </div>
                    </div>
                    <div className="panel-info">
                        <p>Please get in touch ASAP to discuss your repertoire and event. Pricing can vary for short notice requests.<br/><br/>
                        I consider all last minute bookings carefully as to ensure availability, enough time to learn music, our rehearsals etc.</p>
                    </div>
                    <div className="panel-button">
                        <button className="contact-button-3">CONTACT TO BOOK</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing
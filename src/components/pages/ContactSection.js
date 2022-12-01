import React from 'react'
import './ContactUs.css';

const ContactSection = () => {
  return (
    <div className="contactus-section">
        {/* <div className="contactus-wrapper"> */}
            <div class='contactus-item'>
                <h4>INQUIRES + SUPPORT</h4>
                <h1>CONTACT US</h1>
                <p className='contactus-p'>Questions? Comments? Let us help! Please fill out the form below and an UG staff member will reach out to you within 24 hours. Thanks as always for your continued support!</p>
            </div>
        {/* </div> */}
        <div class='contactus-item'>
                <h4>ON THE MAP</h4>
                <h1>OUR LOCATION</h1>
            </div>
    </div>
  )
}

export default ContactSection
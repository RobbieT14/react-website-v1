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
                <form
                  name="contact"
                  className='contactForm'
                  method="post"
                  data-netlify="true"
                  onSubmit="submit"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div>
                    {/* <label>Name</label> */}
                      <input type="text" name="Name" placeholder='Name'/>
                  
                  </div>

                  <div>
                    {/* <label>Email</label> */}
                      <input type="email" name="email" placeholder='Email'/>
                  
                  </div>

                  <div>
                    {/* <label>Message</label> */}
                      <textarea name="message" placeholder='Your Message Here'/>
                  
                  </div>

                  <button type="submit">SEND</button>
                </form>
            </div>
        {/* </div> */}
        <div class='contactus-item'>
                <h4>ON THE MAP</h4>
                <h1>OUR LOCATION</h1>
                <img src='/images/map.png' alt="map location" height ={220} />
                <p>The Gamuda Biz Suites, Jalan Anggerik Vanilla 31/99, Kota Kemuning, 40460 Shah Alam, Selangor</p>
            </div>
    </div>
  )
}

export default ContactSection
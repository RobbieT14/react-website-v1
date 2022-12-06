import React from 'react'
import './Shop.css';


const ShopSection = () => {
  return (
    <div className="contactus-section">
        {/* <div className="contactus-wrapper"> */}
            <div class='contactus-item'>
                <h4>SHOPPING</h4>
                <h1>CONTACT US</h1>
                <p className='contactus-p'>Our ecommerce store is currently being built & will be ready soon! In the meantime, you can order your car covers by sending us a message on Instagram or Facebook and our sales representative will be in touch with you.</p>

            </div>
        {/* </div> */}
        <div class='contactus-item'>
                <h4>payment</h4>
                <h1>PAYMENT METHODS</h1>
                <p>We accept bank transfer, credit cards, GrabPay</p>
            </div>
    </div>
  )
}

export default ShopSection
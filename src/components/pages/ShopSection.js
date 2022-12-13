import React from 'react'
import './Shop.css';


const ShopSection = () => {
  return (
    <div className="shop-section">
        {/* <div className="contactus-wrapper"> */}
            <div class='shop-item'>
                <h4>SHOP</h4>
                <h1>HOW TO PURCHASE?</h1>
                <p className='shop-p'>Our ecommerce store is currently being built.</p>
                <p className='shop-p'>In the meantime, you can order your car covers by sending us a message on Instagram or Facebook and our sales representative will be in touch with you.</p>
                <ul className='shop-list'>
                  <li>Send us a message on <a href="https://www.instagram.com/ultimategaragemy/">Instagram</a> or <a href="https://www.facebook.com/ultimategaragemy">Facebook</a> & let us know your vehicle model</li>
                  <li>Select an Indoor or Outdoor cover material & the colour choice you'd like</li>
                  <li>Make the payment to confirm your order</li>
                  <li>Receive custom car cover in 10 - 15 working days</li>
                </ul>


            </div>
        {/* </div> */}
        <div class='shop-item'>
                <h4>Confirm your order</h4>
                <h1>PAYMENT METHODS</h1>
                <p className='shop-p'>We now accept bank transfer, credit cards, GrabPay</p>
                <p className='shop-p'>Kindly get in touch with us on Instagram or Facebook & our sales representative will be glad to assist you</p>
                <div className='row'>
                  <div className='column'>
                    <img src='/images/banktransfer.jpeg' alt="map location" className="img-contain" />
                  </div>
                  <div className='column'>
                    <img src='/images/visa.png' alt="map location" className="img-contain" />
                  </div>
                  <div className='column'>
                    <img src='/images/mastercard.png' alt="map location" className="img-contain" />
                  </div>
                  <div className='column'>
                    <img src='/images/grabpay.png' alt="map location" className="img-contain" />
                  </div>
                </div>
                
                
                
            </div>
    </div>
  )
}

export default ShopSection
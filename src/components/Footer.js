import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import MailchimpSubscribe from "react-mailchimp-subscribe";


function myFunction() {
  alert("I am an alert box!");
}


function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer--pin'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the newsletter to receive our best promo deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline' onclick="myFunction()">Subscribe</Button>
          </form>


          
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>SHOP</h2>
            <Link to='/shop'>Shop Car Covers</Link>

          </div>
          <div className='footer-link-items'>
            <h2>About</h2>
            <Link to='/'>About Us</Link>
            <Link to='/'>FAQ</Link>
            <Link to='/products'>Products</Link>
            <Link to='/services'>Vehicle Storage</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/contact-us'>Contact Us</Link>
          </div>
          <div className='footer-link-items'>
            <h2>LifeStyle</h2>
            <Link to='/lifestyle'>Track Days</Link>
            <Link to='/lifestyle'>Cars & Coffee</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src='/images/UG_logo.png' alt="UG logo" height ={25} />
              
            </Link>
          </div>
          <small className='website-rights'>UGMY © 2022</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to={{pathname: 'https://www.facebook.com/ultimategaragemy'}}
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to={{pathname: 'https://www.instagram.com/ultimategaragemy/'}}
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to={{pathname: 'https://www.youtube.com/channel/UCOeMadoxpzUcN_hQNGyiuxw/featured'}}
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

export default Footer;

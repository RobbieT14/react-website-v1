import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
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
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
        {/* <div class='footer-link-items'>
          <img src='/images/UG_logo.png' alt="UG logo" height ={25} />
          <small class='website-rights'>UGMY © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to={{pathname: 'https://www.facebook.com/ultimategaragemy'}}
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to={{pathname: 'https://www.instagram.com/ultimategaragemy/'}}
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to={{pathname: 'https://www.youtube.com/channel/UCOeMadoxpzUcN_hQNGyiuxw/featured'}}
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            </div>
          </div> */}
          <div class='footer-link-items'>
            <h2>SHOP</h2>
            <Link to='/shop'>Shop Car Covers</Link>

          </div>
          <div class='footer-link-items'>
            <h2>About</h2>
            <Link to='/'>About Us</Link>
            <Link to='/'>FAQ</Link>
            <Link to='/'>Products</Link>
            <Link to='/'>Vehicle Storage</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/'>Contact Us</Link>
          </div>
          <div class='footer-link-items'>
            <h2>LifeStyle</h2>
            <Link to='/'>Track Days</Link>
            <Link to='/'>Cars & Coffee</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <img src='/images/UG_logo.png' alt="UG logo" height ={25} />
              
            </Link>
          </div>
          <small class='website-rights'>UGMY © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to={{pathname: 'https://www.facebook.com/ultimategaragemy'}}
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to={{pathname: 'https://www.instagram.com/ultimategaragemy/'}}
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to={{pathname: 'https://www.youtube.com/channel/UCOeMadoxpzUcN_hQNGyiuxw/featured'}}
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

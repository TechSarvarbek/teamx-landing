import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTelegram } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { TiArrowUp } from 'react-icons/ti';
import './Footer.css';

function Footer() {
 return (
    <div className="footer-container">
      <footer className="footer bg-dark text-light py-4">
        <div className="container">
          <div className="contact-us row">
            <div className="col-lg-12">
              <address className='adresses'>
                {/* <div className="contact-item" style={{ marginTop: '5px' }}>
                  <FaEnvelope className="contact-icon" />
                  <a style={{ }} href="mailto:info@example.com">info@example.com</a>
                </div> */}
                <div className="contact-item" style={{ marginTop: '5px' }}>
                  <FaPhone className="contact-icon" />
                  <a style={{ }} href="tel:+1234567890">+1 234 567 890</a>
                </div>
                <div className="contact-item" style={{ marginTop: '5px', alignItems: 'center' }}>
                  <FaTelegram className="contact-icon" />
                  <a style={{  }} href="https://t.me/techSarvarbek" target='_blank'>Telegram</a>
                </div>
                <div className="contact-item" style={{ marginTop: '5px' }} >
                  <FaMapMarkerAlt className="contact-icon" />
                  <span style={{ }}>Bukhara, Uzbekistan</span>
                </div>
              </address>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
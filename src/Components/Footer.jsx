import React from 'react';
import DHLogo from '../images/DH.png';
import FacebookIcon from '../images/ico-facebook.png';
import InstagramIcon from '../images/ico-instagram.png';
import TiktokIcon from '../images/ico-tiktok.png';
import WhatsappIcon from '../images/ico-whatsapp.png';


import '../styles/footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-line"></div>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={DHLogo} alt="DH-logo" />
        </div>
        <div className="footer-icons">
          <img src={FacebookIcon} alt="Facebook" />
          <img src={InstagramIcon} alt="Instagram" />
          <img src={TiktokIcon} alt="Tiktok" />
          <img src={WhatsappIcon} alt="Tiktok" />
        </div>
      </div>
    </footer>
  );
}

export default Footer

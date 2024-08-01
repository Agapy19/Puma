import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle } from 'react-icons/fa';
import './FooterBottom.css';

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <p>© 2024 Puma Communication. Tous droits réservés</p>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><FaGoogle /></a>
      </div>
    </div>
  );
};

export default FooterBottom;

import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import './Footer.css';
import FooterBottom from './FooterBottom';

const Footer = () => {
  return (
    <div> 
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-icon"><FaMapMarkerAlt /></div>
          <h3>Address</h3>
          <p>908 New Hampshire Avenue Northwest #100, Washington, DC 20037, United States</p>
        </div>
        <div className="footer-section">
          <div className="footer-icon"><FaPhone /></div>
          <h3>Phones</h3>
          <p>Phone: +1 916-875-2235</p>
          <p>Mobile: +1 916-875-2235</p>
          <p>Fax: +1 916-875-2235</p>
        </div>
        <div className="footer-section">
          <div className="footer-icon"><FaEnvelope /></div>
          <h3>Contacts</h3>
          <p>info@demolink.org</p>
          <p>mail@demolink.org</p>
        </div>
        <div className="footer-section">
          <div className="footer-icon"><FaClock /></div>
          <h3>Heures d'ouverture</h3>
          <p>Lundi-Vendredi: 9:00 - 18:00</p>
          <p>Samedi: 11:00 - 17:00</p>
          <p>Dimanche: Fermée</p>
        </div>
      </div>
    </footer>
      <FooterBottom />
      </div>
  );
};

export default Footer;

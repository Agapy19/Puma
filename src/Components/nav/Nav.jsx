import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import './Nav.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '80023456789'; // Remplacez par le numéro de téléphone souhaité

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  

  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <NavLink to="/">
          <img src={process.env.PUBLIC_URL + '/Images/puma.jpg'} alt="puma communication" />
        </NavLink>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            A Propos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? "active-link" : undefined)}
          >
            Contacts
          </NavLink>
        </li>
        <div className="nav-call-us">
        <button onClick={handlePhoneClick}>Appelle-nous</button>
      </div>
      </ul>
      
      <div className="nav-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Nav;

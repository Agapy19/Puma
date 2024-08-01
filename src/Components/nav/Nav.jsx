import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <NavLink to="/">
          <img src={process.env.PUBLIC_URL + '/Images/puma.jpg'} alt="puma communication" />
        </NavLink>
      </div>
      <ul className="nav-links">
        <li><NavLink exact to="/" activeClassName="active-link">Accueil</NavLink></li>
        <li><NavLink to="/about" activeClassName="active-link">A Propos</NavLink></li>
        <li className="dropdown">
          <NavLink to="/pages" activeClassName="active-link">Pages</NavLink>
          <div className="dropdown-content">
            <NavLink to="/pages/faqs">FAQs</NavLink>
            <NavLink to="/pages/our-team">Our Team</NavLink>
            <NavLink to="/pages/history">History</NavLink>
            <NavLink to="/pages/testimonials">Testimonials</NavLink>
            <NavLink to="/pages/site-map">Site Map</NavLink>
            <NavLink to="/pages/forum">Forum</NavLink>
            <NavLink to="/pages/careers">Careers</NavLink>
            <NavLink to="/pages/portfolio">Portfolio</NavLink>
            <NavLink to="/pages/elements">Elements</NavLink>
          </div>
        </li>
        <li><NavLink to="/blog" activeClassName="active-link">Blog</NavLink></li>
        <li><NavLink to="/gallery" activeClassName="active-link">Gallery</NavLink></li>
        <li><NavLink to="/contacts" activeClassName="active-link">Contacts</NavLink></li>
      </ul>
      <div className="nav-call-us">
        <button>Appelles-nous</button>
      </div>
    </nav>
  );
}

export default Nav;

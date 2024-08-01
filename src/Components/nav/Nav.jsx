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
      </ul>
      <div className="nav-call-us">
        <button>Appelles-nous</button>
      </div>
    </nav>
  );
}

export default Nav;

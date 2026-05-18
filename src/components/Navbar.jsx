import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/sk-logo.jpg';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" className="logo-container" onClick={closeMenu}>
          <img src={logo} alt="SK Logo" className="logo-img" />
          <span>SK SAN ISIDRO</span>
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-icon" onClick={toggleMenu}>
        <div className={isOpen ? "line open" : "line"}></div>
        <div className={isOpen ? "line open" : "line"}></div>
        <div className={isOpen ? "line open" : "line"}></div>
      </div>

      {/* Navigation Links Menu */}
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li>
          <NavLink to="/" end onClick={closeMenu} className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"}>
            <span className="link-text">Home</span>
            <span className="chevron-icon"></span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"}>
            <span className="link-text">About</span>
            <span className="chevron-icon"></span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/people" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"}>
            <span className="link-text">People</span>
            <span className="chevron-icon"></span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/activities" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"}>
            <span className="link-text">Activities</span>
            <span className="chevron-icon"></span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/disclosure" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"}>
            <span className="link-text">Disclosure Board</span>
            <span className="chevron-icon"></span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"}>
            <span className="link-text">Contact</span>
            <span className="chevron-icon"></span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
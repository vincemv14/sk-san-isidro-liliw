import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import logo from '../assets/sk-logo.jpg';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      setIsLoggedIn(!!data.session);
    };
    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu  = () => setIsOpen(false);

  return (
    <>
      {/* ✅ Top bar — Admin Login lives here, separate from main nav */}
      <div style={{
        backgroundColor: '#001a01',
        padding: '6px 5%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
        <Link
          to="/admin-login"
          onClick={closeMenu}
          style={{
            color: '#aaa',
            fontSize: '0.75rem',
            textDecoration: 'none',
            border: '1px solid #444',
            padding: '4px 12px',
            borderRadius: '4px',
            letterSpacing: '0.5px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#ffd000'; e.currentTarget.style.borderColor = '#ffd000'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#aaa';    e.currentTarget.style.borderColor = '#444'; }}
        >
          Admin Login
        </Link>
      </div>

      {/* ✅ Main navbar — clean, no Admin Login crowding it */}
      <nav className="navbar">
        <div className="nav-logo">
          <Link to="/" className="logo-container" onClick={closeMenu}>
            <img src={logo} alt="SK Logo" className="logo-img" />
            <span>SK SAN ISIDRO</span>
          </Link>
        </div>

        <div className="mobile-icon" onClick={toggleMenu}>
          <div className={isOpen ? "line open" : "line"}></div>
          <div className={isOpen ? "line open" : "line"}></div>
          <div className={isOpen ? "line open" : "line"}></div>
        </div>

        <ul className={isOpen ? "nav-links active" : "nav-links"}>
          <li><NavLink to="/"            end onClick={closeMenu} className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"}>Home</NavLink></li>
          <li><NavLink to="/about"           onClick={closeMenu} className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"}>About</NavLink></li>
          <li><NavLink to="/people"          onClick={closeMenu} className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"}>People</NavLink></li>
          <li><NavLink to="/activities"      onClick={closeMenu} className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"}>Activities</NavLink></li>
          <li><NavLink to="/disclosure"      onClick={closeMenu} className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"}>Disclosure Board</NavLink></li>
          <li><NavLink to="/contact"         onClick={closeMenu} className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"}>Contact</NavLink></li>
          <li><NavLink to="/request-services" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"}>Request Services</NavLink></li>

          {/* ✅ Show Admin Dashboard link in mobile menu only when logged in */}
          {isLoggedIn && (
            <li><NavLink to="/admin-dashboard" onClick={closeMenu} className={({ isActive }) => isActive ? "nav-item active-link" : "nav-item"}>Dashboard</NavLink></li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

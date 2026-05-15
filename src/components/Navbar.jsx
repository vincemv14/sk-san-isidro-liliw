import { Link } from 'react-router-dom';
import logo from '../assets/sk-logo.jpg'; // Make sure the filename matches yours
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/" className="logo-container">
          <img src={logo} alt="SK Logo" className="logo-img" />
          <span>SK SAN ISIDRO</span>
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/people">People</Link></li>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/disclosure">Disclosure Board</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import People from './pages/People.jsx';
import Activities from './pages/Activities.jsx';
import DisclosureBoard from './pages/DisclosureBoard.jsx';
import Contact from './pages/Contact.jsx';
import CommunityChatbot from './components/CommunityChatbot';
import './App.css';

// --- Helper: Scroll to top on every route change ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      
      {/* Main content container */}
      <main style={{ overflowX: 'hidden', width: '100%' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/people" element={<People />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/disclosure" element={<DisclosureBoard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Chatbot rendered outside 'main' to ensure fixed positioning works */}
      <CommunityChatbot /> 
    </Router>
  );
}

export default App;
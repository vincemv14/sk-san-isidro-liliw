import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import People from './pages/People.jsx';
import Activities from './pages/Activities.jsx';
import DisclosureBoard from './pages/DisclosureBoard.jsx';
import Contact from './pages/Contact.jsx';
import RequestServices from './pages/RequestServices';
import FlowiseChatbot from './components/FlowiseChatbot.jsx'; // ← new
import ClearanceForm from './components/ClearanceForm';
import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main style={{ overflowX: 'hidden', width: '100%' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/people" element={<People />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/disclosure" element={<DisclosureBoard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-services" element={<RequestServices />} />
        </Routes>
      </main>

      <FlowiseChatbot /> {/* ✅ Custom component, full control */}

    </Router>
  );
}

export default App;
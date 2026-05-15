import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import People from './pages/People.jsx';
import Activities from './pages/Activities.jsx';
import Disclosure_Board from './pages/Disclosure Board.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/people" element={<People />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/disclosure" element={<Disclosure_Board />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
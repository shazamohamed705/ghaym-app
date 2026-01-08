import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Booking from './components/Booking/Booking';
import About from './components/About/About';
import DoctorsSection from './components/Doctors/DoctorsSection';
import OffersSection from './components/Offers/OffersSection';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/offers" element={<OffersSection />} />
        <Route path="/doctors" element={<DoctorsSection />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

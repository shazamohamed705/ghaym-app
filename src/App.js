import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Booking from './components/Booking/Booking';
import About from './components/About/About';
import DoctorsSection from './components/Doctors/DoctorsSection';
import OffersSection from './components/Offers/OffersSection';
import Login from './components/Login/Login'
import Rergister from './components/Register/Register'
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
        <Route path="/Login"element={<Login />}/>
        <Route path="/Register"element={<Login />}/>
      </Routes>
    </Router>
  );
}

export default App;

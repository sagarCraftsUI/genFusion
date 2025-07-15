import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/quote" element={<Quote />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
import React from 'react';
import Searchbar from './Searchbar';
import About from './About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/home" element={<Searchbar />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

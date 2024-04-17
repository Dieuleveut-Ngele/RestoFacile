/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Menu from './components/pages/Menu';
import { RestaurantProvider } from './components/utils/context'; // Import context if used

const App = () => {
  return (
    <Router>
      <RestaurantProvider> {/* Wrap components with context provider if used }
        <div className="min-h-screen">
          <Header />
          <Navbar />
          <main className="container mx-auto px-4 pb-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/menu" element={<Menu />} />
              {/* Add more routes for additional pages }
            </Routes>
          </main>
          <Footer />
        </div>
      </RestaurantProvider> {/* Close context provider if used }
    </Router>
  );
};

export default App;


*/
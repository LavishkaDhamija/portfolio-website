import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Multiple methods to ensure scroll reset
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Force after a tiny delay to ensure it works
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <Router>
        <ScrollToTop />
        <div className="app-container">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
    </Router>
  );
}

export default App;
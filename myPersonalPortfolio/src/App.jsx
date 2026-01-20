import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import NavBar from './components/navBar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

// Sayfa geçişlerinde ekranın en üstten başlamasını sağlayan yardımcı bileşen
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      {/* 1. Scroll Yönetimi */}
      <ScrollToTop />

      {/* 2. EVRENSEL ARKA PLAN KATMANLARI (Persistent Layers) */}
      <div className="fixed inset-0 -z-30 w-full h-full pointer-events-none"></div>

      {/* Teknik Izgara Doku (CSS dosmanda tanımlı olmalı) */}
      <div className="fixed inset-0 pointer-events-none z-[-25] technical-grid opacity-30"></div>

      {/* Mimari Yapı Çizgileri */}
      <div className="fixed inset-0 pointer-events-none z-[-20] max-w-[1400px] mx-auto border-x border-white/[0.04]">
        <div className="absolute left-1/4 h-full w-px bg-white/[0.02]"></div>
        <div className="absolute left-2/4 h-full w-px bg-white/[0.02]"></div>
        <div className="absolute left-3/4 h-full w-px bg-white/[0.02]"></div>
      </div>

      {/* 3. ANA İÇERİK KATMANI */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <NavBar />

        {/* Sayfa İçerikleri */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
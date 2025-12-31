import { useState, useEffect } from 'react';
import codezyLogo from '../assets/Img/_CODEZY (2).png';
import { NavLink, useNavigate } from 'react-router-dom';
import useIsMobile from './hooks/useIsMobile';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile(820);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Ortak link stili
  const linkClass = ({ isActive }) => 
    `text-sm no-underline transition-all duration-300 ${
      isActive ? 'text-white font-bold scale-110' : 'text-white/50 hover:text-white hover:scale-105'
    }`;

  return (
    <nav className={`fixed top-0 w-full z-[999] transition-all duration-500 ${scrolled ? 'py-3 bg-black/40 backdrop-blur-md' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        
        {/* LOGO */}
        <div className="flex-1">
          <div onClick={() => { navigate('/'); setMenuOpen(false); }} className="cursor-pointer inline-block">
            <img src={codezyLogo} alt="Codezy Logo" className={`${isMobile ? 'w-24' : 'w-32'} h-auto`} />
          </div>
        </div>

        {/* DESKTOP MENU (Capsule Design) */}
        {!isMobile && (
          <div className="flex-[2] flex justify-center">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 px-8 py-2.5 rounded-full flex items-center gap-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]">
              <NavLink to="/" className={linkClass}>Overview</NavLink>
              <span className="w-px h-4 bg-white/10"></span>
              <NavLink to="/skills" className={linkClass}>Services</NavLink>
              <span className="w-px h-4 bg-white/10"></span>
              <NavLink to="/projects" className={linkClass}>Solutions</NavLink>
              <span className="w-px h-4 bg-white/10"></span>
              <NavLink to="/contact" className={({ isActive }) => `text-sm no-underline transition-all ${isActive ? 'text-purple-400 font-bold' : 'text-white/50 hover:text-purple-400'}`}>
                CodezyForMe
              </NavLink>
            </div>
          </div>
        )}

        {/* SOCIAL & MOBILE TOGGLE */}
        <div className="flex-1 flex justify-end items-center gap-6">
          <div className="hidden md:flex gap-5 opacity-70 hover:opacity-100 transition-opacity">
             <a href="https://linkedin.com/in/salih-yazar-216835206" target="_blank" rel="noreferrer" className="text-xl text-white hover:text-purple-400"><i className="bi bi-linkedin"></i></a>
             <a href="https://github.com/YzrSalih" target="_blank" rel="noreferrer" className="text-xl text-white hover:text-purple-400"><i className="bi bi-github"></i></a>
          </div>
          
          {isMobile && (
            <button className="text-white text-3xl focus:outline-none z-[1001]" onClick={() => setMenuOpen(!menuOpen)}>
              <i className={`bi ${menuOpen ? 'bi-x' : 'bi-list'}`}></i>
            </button>
          )}
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      {isMobile && (
        <div className={`fixed inset-0 bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-10 transition-transform duration-500 z-[1000] ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
           <NavLink to="/" onClick={() => setMenuOpen(false)} className="text-3xl text-white no-underline font-light">Overview</NavLink>
           <NavLink to="/skills" onClick={() => setMenuOpen(false)} className="text-3xl text-white no-underline font-light">Services</NavLink>
           <NavLink to="/projects" onClick={() => setMenuOpen(false)} className="text-3xl text-white no-underline font-light">Solutions</NavLink>
           <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="text-3xl text-purple-400 no-underline font-bold">CodezyForMe</NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
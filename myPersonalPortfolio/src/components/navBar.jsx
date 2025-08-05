import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import codezyLogo from '../assets/Img/codezyy.png';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };
  return (
    <Navbar expand="lg" className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}> 
      <Container fluid>
        <div className="navbar-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {/* Logo - Sol */}
          <div className="navbar-left" style={{ display: 'flex', alignItems: 'center', flex: '0 0 auto' }}>
            <Navbar.Brand href="#home">
              <img
                src={codezyLogo}
                alt="Codezy Logo"
                style={{
                  width: '160px',
                  height: 'auto',
                  maxWidth: '160px',
                  display: 'block',
                  margin: '0 20px 0 0',
                  objectFit: 'contain',
                  verticalAlign: 'middle'
                }}
              />
            </Navbar.Brand>
          </div>
          {/* Menü Linkleri - Orta */}
          <div className="navbar-center" style={{ display: 'flex', alignItems: 'center', flex: '1 1 auto', justifyContent: 'center' }}>
            <Nav className="nav-links" style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active' : ''} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <span style={{ fontSize: '22px', color: '#fff', fontWeight: 'bold', margin: '0 8px' }}>|</span>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active' : ''} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <span style={{ fontSize: '22px', color: '#fff', fontWeight: 'bold', margin: '0 8px' }}>|</span>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active' : ''} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
          </div>
          {/* Sosyal ve Buton - Sağ */}
          <div className="navbar-right" style={{ display: 'flex', alignItems: 'center', flex: '0 0 auto', gap: '16px' }}>
            <div className="social-icons" style={{ display: 'flex', gap: '10px', marginRight: '40px' }}>
              <a href="https://www.linkedin.com/in/salih-yazar-216835206/?profileId=ACoAADRy1fIBmvfA3MFyOFnGIZdJ95vVAw4xsTY" target="_blank" rel="noopener noreferrer" className="icon-link" title="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/YzrSalih" target="_blank" rel="noopener noreferrer" className="icon-link" title="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://medium.com/@yzr.salih.yzr" target="_blank" rel="noopener noreferrer" className="icon-link" title="Medium">
                <i className="bi bi-medium"></i>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;
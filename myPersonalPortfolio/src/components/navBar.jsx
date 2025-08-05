import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <div className="navbar-content">
          <div className="navbar-left">
            <Navbar.Brand href="#home">
              <span className="logo-text">LOGO</span>
            </Navbar.Brand>
          </div>
          <div className="navbar-center">
            <Nav className="nav-links">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
          </div>
          <div className="navbar-right">
            <div className="social-icons">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon-link" title="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="icon-link" title="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="icon-link" title="Medium">
                <i className="bi bi-medium"></i>
              </a>
            </div>
            <button className="connect-btn">Let's Connect</button>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;

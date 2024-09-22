import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header.css'

function Header() {
  return (
    <>
      {[ 'lg'].map((expand) => (
        <Navbar key={expand} expand={expand}  className="gradient-background mb-3">
          <Container >
            <Navbar.Brand href="/"><img src='/logo.png' className='img-responsive' style={{maxHeight:50, maxWidth:50}} alt="Techno icon"/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand} ` }>
                  <span className="link-color">Menu</span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end  flex-grow-1 pe-3">
                  <Nav.Link href="/" className='link-color px-5'>Home</Nav.Link>
                  <Nav.Link href="/events" className='link-color px-5'>Events</Nav.Link>
                  <Nav.Link target='_blank' className='link-color px-5' href="https://forms.gle/Fu5cjF8mepCfZ3626">Register</Nav.Link>
                  
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
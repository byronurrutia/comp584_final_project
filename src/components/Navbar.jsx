import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { Cart, Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons';

export default function NavBar(){
  return(
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed='top'>
          <Container>
            <Navbar.Brand href="#home">584 Code</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#outerwear">Outerwear</Nav.Link>
                <Nav.Link href="#tops">Tops</Nav.Link>
                <Nav.Link href="#bottoms">Bottoms</Nav.Link>
                <Nav.Link href="#accessories">Accessories</Nav.Link>
              </Nav>
              <Nav className='justify-content-end'>
              <Nav.Link href="#sizing">Sizing</Nav.Link>
              <NavDropdown title="External Links" id="nav-dropdown">
                <NavDropdown.Item><Twitter /> Twitter</NavDropdown.Item>
                <NavDropdown.Item><Instagram /> Instagram</NavDropdown.Item>
                <NavDropdown.Item><Youtube /> Youtube</NavDropdown.Item>
                <NavDropdown.Item><Facebook /> Facebook</NavDropdown.Item>
              </NavDropdown>
              <Button variant="dark">
                <Cart /> Cart  <Badge bg="secondary">0</Badge>
                <span className="visually-hidden">unread messages</span>
              </Button>
              </Nav>  
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </> 
      )
}
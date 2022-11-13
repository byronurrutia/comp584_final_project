import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import {
  Cart3,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Coding in Clothing</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title="Product Catagories"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#outerwear--section">
                Outerwear
              </NavDropdown.Item>
              <NavDropdown.Item href="#tops--section">Tops</NavDropdown.Item>
              <NavDropdown.Item href="#bottoms--section">
                Bottoms
              </NavDropdown.Item>
              <NavDropdown.Item href="#accessories--section">
                Bottoms
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Sizing</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" className="me-3">
              <Cart3 /> Cart
            </Nav.Link>
          </Nav>
          <Nav className="d-flex flex-row">
            <Nav.Link href="#" className="me-3">
              <Twitter />
            </Nav.Link>
            <Nav.Link href="#" className="me-3">
              <Instagram />
            </Nav.Link>
            <Nav.Link href="#" className="me-3">
              <Facebook />
            </Nav.Link>
            <Nav.Link href="#" className="me-3">
              <Youtube />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

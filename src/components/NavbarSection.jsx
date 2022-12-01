import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import logo from "../assets/light_icon.png";

export default function NavbarSection() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="shadow"
    >
      <Container fluid>
        <Link to={"/comp584_final_project"}>
          <Navbar.Brand>
            <img
              width="30"
              height="30"
              className="d-inline-block align-top mx-5"
              src={logo}
              alt="logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Account</Nav.Link>
            <NavDropdown
              title="Product Catagories"
              id="collasible-nav-dropdown"
            >
              <Link to={"/comp584_final_project/outerwear"}>
                <NavDropdown.Item href="#outerwear-section">
                  Outerwear
                </NavDropdown.Item>
              </Link>
              <Link to={"/comp584_final_project/tops"}>
                <NavDropdown.Item href="#outerwear-section">
                  Tops
                </NavDropdown.Item>
              </Link>
              <Link to={"/comp584_final_project/bottoms"}>
                <NavDropdown.Item href="#outerwear-section">
                  Bottoms
                </NavDropdown.Item>
              </Link>
              <Link to={"/comp584_final_project/accessories"}>
                <NavDropdown.Item href="#outerwear-section">
                  Accesories
                </NavDropdown.Item>
              </Link>
              <Link to={"/comp584_final_project/all"}>
                <NavDropdown.Item href="#outerwear-section">
                  All Products
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
            <NavDropdown title="Cart (0)" id="collasible-nav-dropdown">
              <div className="w-100 d-flex justify-">
                <Button
                  href="#Home"
                  variant="danger"
                  size="large"
                  className="w-75 mx-auto"
                >
                  Checkout
                </Button>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

import { Container } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

export default function FooterSection() {
  return (
    <Container fluid className="d-flex flex-row justify-content-center py-5">
      <a href="#Home" className="me-3">
        <Twitter color="grey" />
      </a>
      <a href="#Home" className="me-3">
        <Instagram color="grey" />
      </a>
      <a href="#Home" className="me-3">
        <Facebook color="grey" />
      </a>
      <a href="#Home" className="me-3">
        <Youtube color="grey" />
      </a>
    </Container>
  );
}

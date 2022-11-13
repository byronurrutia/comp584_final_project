import { Container } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

export default function FooterSection() {
  return (
    <div className="py-5">
      {/* eslint-disable-next-line */}
      <marquee scrollamount="15">
        <h1 className="display-1 fw-bold text-uppercase fst-italic">
          clothing with coding and programming themes
        </h1>
      </marquee>
      <div className="py-3">
        <Container className="d-flex flex-row justify-content-center">
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
      </div>
    </div>
  );
}

import { Button } from "react-bootstrap";

export default function HeroSection() {
  return (
    <div className="hero--section text-center d-flex flex-column justify-content-center">
      <h1 className="display-1 fw-bold pb-5 mt-5">Coding in Clothing</h1>
      <div className="col-7 mx-auto mb-5">
        <div className="gap-2 d-xl-flex d-grid justify-content-xl-center">
          <Button variant="light" size="large" className="px-xl-4 shadow">
            <a href="#outerwear--section">Outerwear</a>
          </Button>
          <Button variant="light" size="large" className="px-xl-4 shadow">
            <a href="#tops--section">Tops</a>
          </Button>
          <Button variant="light" size="large" className="px-xl-4 shadow">
            <a href="#bottoms--section">Bottoms</a>
          </Button>
          <Button variant="light" size="large" className="px-xl-4 shadow">
            <a href="#accessories--section">Accessories</a>
          </Button>
          <Button variant="light" size="large" className="px-xl-4 shadow">
            <a href="#">Sizing</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

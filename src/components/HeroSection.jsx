import { Button } from "react-bootstrap";

export default function HeroSection() {
  return (
    <div className="hero--section text-center d-flex flex-column justify-content-center">
      <h1 className="display-4 fw-bold pb-5 mt-5">Coding Themed Clothing</h1>
      <div className="col-7 mx-auto mb-5">
        <div className="gap-2 d-xl-flex d-grid justify-content-xl-center">
          <Button variant="light" size="large" className="px-xl-4 shadow">
            Outerwear
          </Button>
          <Button variant="light" size="large" className="px-xl-4 shadow">
            Tops
          </Button>
          <Button variant="light" size="large" className="px-xl-4 shadow">
            Bottoms
          </Button>
          <Button variant="light" size="large" className="px-xl-4 shadow">
            Accessories
          </Button>
          <Button variant="light" size="large" className="px-xl-4 shadow">
            Sizing
          </Button>
        </div>
      </div>
    </div>
  );
}

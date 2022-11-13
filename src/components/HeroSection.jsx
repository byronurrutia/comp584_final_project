import { Button } from "react-bootstrap";

export default function HeroSection() {
  return (
    <div className="hero--section text-center d-flex flex-column justify-content-center">
      <h1 className="display-1 fw-bold pb-5 mt-5">Coding in Clothing</h1>
      <div className="col-7 mx-auto mb-5">
        <div className="gap-2 d-xl-flex d-grid justify-content-xl-center">
          <Button
            href="#outerwear--section"
            variant="light"
            size="large"
            className="px-xl-4 shadow"
          >
            Outerwear
          </Button>
          <Button
            href="#tops--section"
            variant="light"
            size="large"
            className="px-xl-4 shadow"
          >
            Tops
          </Button>
          <Button
            href="#bottoms--section"
            variant="light"
            size="large"
            className="px-xl-4 shadow"
          >
            Bottoms
          </Button>
          <Button
            href="#accessories--section"
            variant="light"
            size="large"
            className="px-xl-4 shadow"
          >
            Accessories
          </Button>
          <Button
            href="#Home"
            variant="light"
            size="large"
            className="px-xl-4 shadow"
          >
            Sizing
          </Button>
        </div>
      </div>
    </div>
  );
}

import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductSection(props) {
  return (
    <div className="product-section">
      <Container
        fluid
        style={{
          height: "100vh",
          backgroundColor: props.lightMode ? "white" : "#121212",
        }}
      >
        <Row className="row-cols-2 row-cols-xl-3 g-4 px-3">
          {props.products.map((product) => (
            <Link to={"*"} style={{ textDecoration: "none" }} key={product.id}>
              <Col>
                {product.image_url.length !== 0 ? (
                  <img
                    src={product.image_url[0]}
                    alt="product"
                    style={{ width: "100%" }}
                  />
                ) : (
                  <img
                    src="https://www.nicepng.com/png/detail/207-2070432_white-background-url.png"
                    alt="product"
                    style={{ width: "100%" }}
                  />
                )}
                <p
                  style={{
                    color: props.lightMode ? "black" : "white",
                  }}
                >
                  {product.productName} <br />${" "}
                  {(product.price / Math.pow(10, 2)).toLocaleString("en-us", {
                    minimumFractionDigits: 2,
                  })}
                </p>
              </Col>
            </Link>
          ))}
        </Row>
      </Container>
    </div>
  );
}

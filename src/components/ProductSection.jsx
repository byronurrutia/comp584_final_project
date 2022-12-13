import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PlusSquare } from "react-bootstrap-icons" 

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
            <Col key={product.id}>
              {product.image_url.length !== 0 ? (
                <img
                  src={product.image_url[0]}
                  alt="product image"
                  style={{ width: "100%" }}
                />
              ) : (
                <img
                  src="https://www.nicepng.com/png/detail/207-2070432_white-background-url.png"
                  alt="product image"
                  style={{ width: "100%" }}
                />
              )}
              <p>
                {product.productName} <br />${" "}
                {(product.price / Math.pow(10, 2)).toLocaleString("en-us", {
                  minimumFractionDigits: 2,
                })}
              </p>
              <Link to={"#"}>showDetail</Link>
              <PlusSquare onClick={props.addItem()}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

import { Card, Col, Container, Row } from "react-bootstrap";
import tShirtImage from "../assets/tshirt.jpg";

export default function ProductSection(props) {
  return (
    <div className="product-section">
      <Container fluid>
        <Row className="row-cols-2 row-cols-xl-3 g-4 px-3">
          <Col>
            <Card style={{ width: "100%" }} className="">
              <Card.Img variant="top" src={tShirtImage} />
              <Card.Body>
                <Card.Title>Sample Product</Card.Title>
                <Card.Text>$65.00</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "100%" }} className="">
              <Card.Img variant="top" src={tShirtImage} />
              <Card.Body>
                <Card.Title>Sample Product</Card.Title>
                <Card.Text>$65.00</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "100%" }} className="">
              <Card.Img variant="top" src={tShirtImage} />
              <Card.Body>
                <Card.Title>Sample Product</Card.Title>
                <Card.Text>$65.00</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

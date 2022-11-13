import { Card, Col, Container, Row } from "react-bootstrap";
import tShirtImage from "../assets/tshirt.jpg";

export default function ProductSection() {
  return (
    <div className="product--section">
      <Container>
        <Row className="row-cols-2 row-cols-xl-4 gy-2 gx-4 px-0 px-md-5">
          <Col>
            <Card style={{ width: "100%" }} className="shadow grow">
              <Card.Img variant="top" src={tShirtImage} />
              <Card.Body>
                <Card.Title>Sample Product</Card.Title>
                <Card.Text>$65.00</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "100%" }} className="shadow grow">
              <Card.Img variant="top" src={tShirtImage} />
              <Card.Body>
                <Card.Title>Sample Product</Card.Title>
                <Card.Text>$65.00</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "100%" }} className="shadow grow">
              <Card.Img variant="top" src={tShirtImage} />
              <Card.Body>
                <Card.Title>Sample Product</Card.Title>
                <Card.Text>$65.00</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "100%" }} className="shadow grow">
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

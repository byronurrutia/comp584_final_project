import { Container } from "react-bootstrap";

export default function HeaderSection(props) {
  return (
    <Container className="d-flex justify-content-xl-start justify-content-center pt-3 pb-2">
      <h1 id={props.link} className="display-5 fw-bold">
        {props.text}
      </h1>
    </Container>
  );
}

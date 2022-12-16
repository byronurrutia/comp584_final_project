import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

export default function Register(props) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(event) {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.id]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted!");
  }

  return (
    <Container
      fluid
      style={{
        backgroundColor: props.lightMode ? "white" : "#121212",
        color: props.lightMode ? "black" : "white",
      }}
    >
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ height: "80vh" }}
      >
        <div className="p-5 border shadow rounded w-50">
          <h1 className="w-100 text-center">Register</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3"
              controlId="firstName"
              value={formData.firstName}
              onChange={handleChange}
            >
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="Enter First Name" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="lastName"
              value={formData.lastName}
              onChange={handleChange}
            >
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Enter Last Name" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="email"
              value={formData.email}
              onChange={handleChange}
            >
              <Form.Label>Email</Form.Label>
              <Form.Control type="Email" placeholder="name@example.com" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="password"
              value={formData.password}
              onChange={handleChange}
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Container>
    </Container>
  );
}

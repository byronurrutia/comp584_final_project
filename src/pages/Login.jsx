import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  console.log(formData);

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
        style={{
          height: "80vh",
        }}
      >
        <div className="p-5 border shadow rounded w-50">
          <h1 className="w-100 text-center">Sign In</h1>
          <Form className="py-3" onSubmit={handleSubmit}>
            <Form.Group
              className="mb-3"
              controlId="email"
              onChange={handleChange}
              value={formData.email}
            >
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="password"
              onChange={handleChange}
              value={formData.password}
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <Link to={"/comp584_final_project/register"}>
            Need an account? Sign Up
          </Link>
        </div>
      </Container>
    </Container>
  );
}

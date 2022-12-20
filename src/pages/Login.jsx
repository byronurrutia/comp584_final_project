import axios from "axios";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Login(props) {
  //use the router navigator to redirect once the user logs in
  const navigate = useNavigate();
  //store the form data in state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //this function checks input and changes the state based on inputed change
  function handleChange(event) {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.id]: event.target.value,
      };
    });
  }

  //stops page reload
  //makes an api call to authenticate the user
  function handleSubmit(event) {
    event.preventDefault();
    //used to encript user data
    //decripted in the server
    let text = `${formData.email}:${formData.password}`;
    let encoded = window.btoa(text);

    var config = {
      method: "post",
      url: "https://themillenniumfalcon.junhechen.com/584final/api/v1/login",
      headers: {
        "Content-Type": "text/plain",
      },
      data: encoded,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        //store reponse data on session storage to be used in the application
        sessionStorage.setItem(
          "sessionId",
          JSON.stringify(response.data.sessionId)
        );
        sessionStorage.setItem(
          "displayName",
          JSON.stringify(response.data.displayName)
        );
        sessionStorage.setItem(
          "userName",
          JSON.stringify(response.data.userName)
        );
        //change the state acknowledging a user has logged in
        props.toggleUser();
        //redirect to homepage
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
        //the was an error loggin in
        //wrong credenitals or server is down
        window.alert("Please check your form input or try again later");
      });
  }

  return (
    <Container
      fluid
      //render based on web theme
      style={{
        backgroundColor: props.lightMode ? "white" : "#121212",
        color: props.lightMode ? "black" : "white",
      }}
    >
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: "80vh",
        }}
      >
        <div
          className="p-5 border shadow rounded w-50"
          style={{ minWidth: 300 }}
        >
          <h1 className="w-100 text-center">Sign In</h1>
          {/* for that dynamically change state on user input */}
          <Form className="py-3" onSubmit={handleSubmit} noValidate>
            <Form.Group
              required
              className="mb-3"
              controlId="email"
              onChange={handleChange}
              value={formData.email}
            >
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
              <Form.Control.Feedback type="invalid">
                Please check your Email or Password or try again later
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              required
              className="mb-3"
              controlId="password"
              onChange={handleChange}
              value={formData.password}
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
              <Form.Control.Feedback type="invalid">
                Please check your Email or Password or try again later
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <Link to={"/register"}>Need an account? Sign Up</Link>
        </div>
      </Container>
    </Container>
  );
}

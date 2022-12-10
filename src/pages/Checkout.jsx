import { Elements } from "@stripe/react-stripe-js";
import { Container } from "react-bootstrap";
import CheckoutForm from "../components/CheckoutForm";

export default function Checkout(props) {
  return (
    <Container
      fluid
      style={{
        height: "100vh",
        backgroundColor: props.lightMode ? "white" : "#121212",
      }}
    >
      {props.clientSecret && (
        <Elements
          options={props.options}
          stripe={props.stripePromise}
          // key={props.clientSecret}
        >
          <CheckoutForm />
        </Elements>
      )}
    </Container>
  );
}

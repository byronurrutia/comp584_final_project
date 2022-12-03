import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

export default function Checkout(props) {
  return (
    <div>
      {props.clientSecret && (
        <Elements
          options={props.options}
          stripe={props.stripePromise}
          // key={props.clientSecret}
        >
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

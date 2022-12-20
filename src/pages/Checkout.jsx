import { Elements } from "@stripe/react-stripe-js";
import { nanoid } from "nanoid";
import { Container } from "react-bootstrap";
import CheckoutForm from "../components/CheckoutForm";

export default function Checkout(props) {
  return (
    <div
      className="w-100"
      // load styles based on the theme
      style={{
        backgroundColor: props.lightMode ? "white" : "#121212",
        color: props.lightMode ? "black" : "white",
      }}
    >
      <Container
        className="d-md-flex"
        style={{
          minHeight: "80vh",
        }}
      >
        <div className="d-flex w-100 w-md-50 flex-column text-start p-md-5 p-3 my-3 me-md-4 ">
          <h1>
            Total: $
            {/* add all the prices to in the cart and format it
            in USD */}
            {(
              props.cartItems.reduce(
                (accumulator, currentValue) =>
                  accumulator + parseInt(currentValue.price),
                0
              ) / Math.pow(10, 2)
            ).toLocaleString("en-us", {
              minimumFractionDigits: 2,
            })}
          </h1>
          {/* display each cart item in a specific format */}
          {props.cartItems.map((item) => {
            return (
              <div
                key={nanoid()}
                className="d-flex align-items-center border rounded my-1"
                style={{ minWidth: "250px" }}
              >
                {/* conditionally render the product image */}
                {item.image_url.length !== 0 ? (
                  <img
                    className="m-2"
                    src={item.image_url[0]}
                    alt="product"
                    style={{ width: 60, height: 60 }}
                  />
                ) : (
                  <img
                    src="https://www.nicepng.com/png/detail/207-2070432_white-background-url.png"
                    alt="product"
                    style={{ width: 30 }}
                  />
                )}
                <p className="mt-2" style={{ fontSize: 12 }}>
                  {item.productName} <br />$ {/* format the price in USD */}
                  {(item.price / Math.pow(10, 2)).toLocaleString("en-us", {
                    minimumFractionDigits: 2,
                  })}
                </p>
              </div>
            );
          })}
        </div>
        <div
          className="w-100 w-md-50 p-md-5 p-2 my-3"
          style={{
            backgroundColor: "lightgrey",
            borderRadius: "15px",
          }}
        >
          {/* check if there is required stripe data and render based on that */}
          {props.clientSecret && (
            <Elements
              options={props.options}
              stripe={props.stripePromise}
              key={props.clientSecret}
            >
              {/* pass required data that will be used in the component */}
              <CheckoutForm
                cartItems={props.cartItems}
                resetCart={props.resetCart}
                clearUserCart={props.clearUserCart}
                updateUserCart={props.updateUserCart}
              />
            </Elements>
          )}
        </div>
      </Container>
    </div>
  );
}

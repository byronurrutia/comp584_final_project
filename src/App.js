import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./pages/Checkout";
import config from "../src/auth/config";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { LoginCallback, Security } from "@okta/okta-react";
import Login from "../src/auth/Login";
import axios from "axios";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const oktaAuth = new OktaAuth(config.oidc);

function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  const [allProducts, setAllProducts] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [clientSecret, setClientSecret] = useState("");

  const history = useNavigate();
  const customAuthHandler = () => {
    history.push("/login");
  };
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || "", window.location.origin));
  };

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  function toggleMode() {
    setIsLightMode((prev) => !prev);
  }

  function addItem() {
    setCartItems();
  }

  function removeItem() {
    setCartItems();
  }

  function checkout() {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }

  // class Product {
  //   constructor(productName, productDiscription, productImages, productId) {
  //     (this.productName = productName),
  //       (this.productDiscription = productDiscription),
  //       (this.productImages = productImages),
  //       (this.productId = productId);
  //   }
  // }

  useEffect(() => {
    axios
      .get(
        "https://themillenniumfalcon.junhechen.com/584final/api/v1/stripe/getAllItem"
      )
      .then((res) => {
        console.log(res);
        const products = res.data;
        console.log(products);
        setAllProducts(products);
        console.log(allProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Security
      oktaAuth={oktaAuth}
      onAuthRequired={customAuthHandler}
      restoreOriginalUri={restoreOriginalUri}
    >
      <Routes>
        <Route
          path="/comp584_final_project"
          element={
            <Dashboard
              lightMode={isLightMode}
              toggleMode={toggleMode}
              cartItems={cartItems}
              removeItem={removeItem}
              checkout={checkout}
            />
          }
        >
          <Route index element={<Home lightMode={isLightMode} />} />
          <Route
            path="/comp584_final_project/outerwear"
            element={
              <Products
                text="Outerwear"
                lightMode={isLightMode}
                products={allProducts}
              />
            }
          />
          <Route
            path="/comp584_final_project/tops"
            element={
              <Products
                text="Tops"
                lightMode={isLightMode}
                products={allProducts}
              />
            }
          />
          <Route
            path="/comp584_final_project/bottoms"
            element={
              <Products
                text="Bottoms"
                lightMode={isLightMode}
                products={allProducts}
              />
            }
          />
          <Route
            path="/comp584_final_project/accessories"
            element={
              <Products
                text="Accesories"
                lightMode={isLightMode}
                products={allProducts}
              />
            }
          />
          <Route
            path="/comp584_final_project/all"
            element={
              <Products
                text="All Products"
                lightMode={isLightMode}
                products={allProducts}
              />
            }
          />
          <Route
            path="/comp584_final_project/checkout"
            element={
              <Checkout
                lightMode={isLightMode}
                appearance={appearance}
                options={options}
                // clientSecret={clientSecret}
                stripePromise={stripePromise}
              />
            }
          />
          <Route path="/comp584_final_project/login" element={<Login />} />
          <Route
            path="/comp584_final_project/login/callback"
            element={LoginCallback}
          />
        </Route>
      </Routes>
    </Security>
  );
}

export default App;

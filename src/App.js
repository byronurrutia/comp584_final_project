import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./pages/Checkout";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  const [allProducts, setAllProducts] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [clientSecret, setClientSecret] = useState("");

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
    // var qs = require("qs");
    // var data = qs.stringify({
    //   amount: "10000",
    //   currency: "USD",
    // });
    // var config = {
    //   method: "post",
    //   url: "https://api.stripe.com//v1/payment_intents",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //     Authorization:
    //       "Bearer sk_test_51M9KQVDFKcUmHWCShtz71sK2YiKdZab0mTtFjHPDmVwTcOlhIN5u3wrYQ3UNjPj2kwWf9qduFDcaDtfA4wROMwAw00F5ryD30u",
    //   },
    //   data: data,
    // };
    // axios(config)
    //   .then(function (response) {
    //     // console.log(JSON.stringify(response.data));
    //     // const processedData
    //     console.log(response);
    //     setClientSecret(response.data.client_secret);
    //     // setClientSecret(processedData.clientSecret);
    //     console.log(clientSecret);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }

  useEffect(() => {
    // fetch("https://themillenniumfalcon.junhechen.com/584final/api/v1/stripe/")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setAllProducts(data);
    //   });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="comp584_final_project"
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

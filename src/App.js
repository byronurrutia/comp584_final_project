import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useNavigate, redirect} from "react-router-dom";
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
  const [allProducts, setAllProducts] = useState([]);
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

  // function addItem() {
  //   setCartItems();
  // }
  function addToCart(product){
    let temp = cartItems;
    temp.push(product);
    setCartItems(temp);
    console.log("function called here");
    
  }

  function removeItem(toremove) {
    /*
    let temp = [];
    let removed = false;
    cartItems.forEach((item) =>{
      if(item === toremove && removed === false){
        removed = true;
      }else{
        temp.push(item);
      }
    })
    */
    setCartItems();
    
  }

  function checkout(a) {
    // Create PaymentIntent as soon as the page loads
    fetch(
      "https://themillenniumfalcon.junhechen.com//584final/api/v1/stripe/paymentIntend",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: a,
          currency: "USD",
          method: "card",
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
    console.log("clientsecret: " + clientSecret);
  }

  function filter(category, products) {
    let outputArr = [];
    products.forEach((element) => {
      if (element.category === category) {
        outputArr.push(element);
      }
    });
    return outputArr;
  }

  useEffect(() => {
    axios
      .get(
        "https://themillenniumfalcon.junhechen.com/584final/api/v1/stripe/getAllItem"
      )
      .then((res) => {
        //console.log(res);
        const products = res.data;
        let resArr = [];
        products.forEach((element) => {
          resArr.push(element);
        });
        //console.log(products);
        setAllProducts(resArr);
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
                products={filter("outerwear", allProducts)}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/comp584_final_project/tops"
            element={
              <Products
                text="Tops"
                lightMode={isLightMode}
                products={filter("tops", allProducts)}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/comp584_final_project/bottoms"
            element={
              <Products
                text="Bottoms"
                lightMode={isLightMode}
                products={filter("bottoms", allProducts)}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/comp584_final_project/accessories"
            element={
              <Products
                text="Accesories"
                lightMode={isLightMode}
                products={filter("accessories", allProducts)}
                addToCart={addToCart}
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
                addToCart={addToCart}
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
                clientSecret={clientSecret}
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

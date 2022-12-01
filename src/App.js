import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { useState } from "react";

function App() {
  const [isLightMode, setIsLightMode] = useState(true);

  function toggleMode() {
    setIsLightMode((prev) => !prev);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="comp584_final_project"
          element={
            <Dashboard lightMode={isLightMode} toggleMode={toggleMode} />
          }
        >
          <Route index element={<Home lightMode={isLightMode} />} />
          <Route
            path="/comp584_final_project/outerwear"
            element={<Products text="Outerwear" lightMode={isLightMode} />}
          ></Route>
          <Route
            path="/comp584_final_project/tops"
            element={<Products text="Tops" lightMode={isLightMode} />}
          ></Route>
          <Route
            path="/comp584_final_project/bottoms"
            element={<Products text="Bottoms" lightMode={isLightMode} />}
          ></Route>
          <Route
            path="/comp584_final_project/accessories"
            element={<Products text="Accesories" lightMode={isLightMode} />}
          ></Route>
          <Route
            path="/comp584_final_project/all"
            element={<Products text="All Products" lightMode={isLightMode} />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

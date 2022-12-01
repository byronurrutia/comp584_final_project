import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="comp584_final_project" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route
            path="/comp584_final_project/outerwear"
            element={<Products text="Outerwear" />}
          ></Route>
          <Route
            path="/comp584_final_project/tops"
            element={<Products text="Tops" />}
          ></Route>
          <Route
            path="/comp584_final_project/bottoms"
            element={<Products text="Bottoms" />}
          ></Route>
          <Route
            path="/comp584_final_project/accessories"
            element={<Products text="Accesories" />}
          ></Route>
          <Route
            path="/comp584_final_project/all"
            element={<Products text="All Products" />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

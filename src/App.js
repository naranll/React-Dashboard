import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { productsData } from "./util/data";
import "./styles/main.css";

function App() {
  const [products, setProducts] = useState(productsData);

  return (
    <div className="App">
      <Header />
      <div className="main">
        <SideMenu />
        <Routes>
          <Route path="/" element={<Products products={products} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

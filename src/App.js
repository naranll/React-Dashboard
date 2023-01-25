import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Products from "./components/Products";
import Product from "./components/Product";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { productsData } from "./util/data";
import "./styles/main.css";

function App() {
  const [products, setProducts] = useState(productsData);
  const [selectedProduct, setSelectedProduct] = useState('');

  return (
    <div className="App">
      <Header />
      <div className="main">
        <SideMenu />
        <Routes>
          <Route path="/" element={<Products products={products} setselected={setSelectedProduct} selected={selectedProduct} />} />
          {/* <Route path="/product/:id" element={<Product product={selectedProduct} />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;

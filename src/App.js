import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Products from "./components/Products";
import Monitor from "./components/Monitor";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles/app.css";
// import { productsData } from "./util/data";
import axios from "axios";



function App() {
  const [products, setProducts] = useState('');
  const [page, setPage] = useState('monitor');

  useEffect(() => {
    axios.get("http://localhost:2020/products")
      .then(response => {
        setProducts(response.data);
      })
      .catch(() => console.log("error fetching"))
  }, [])

  return (
    <div className="App">
      <Header />
      <div className="main">
        <SideMenu setPage={setPage} page={page} />
        <Routes>
          <Route path="/" element={<Monitor />} />
          <Route path="/products" element={<Products products={products} setPage={setPage} page={page} />} />
          {/* <Route path="/" element={<Products products={products} setselected={setSelectedProduct} selected={selectedProduct} />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;

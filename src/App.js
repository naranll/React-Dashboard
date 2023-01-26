import "./styles/app.css";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Products from "./components/Products";
import Monitor from "./components/Monitor";
import data from "./util/data";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Add from "./components/sub/Add";
import Edit from "./components/sub/Edit";
import Delete from "./components/sub/Delete";

function App() {
  const [products, setProducts] = useState('');
  const [page, setPage] = useState('monitor');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [newProduct, setNewProduct] =useState(0);
  const [productAction, setProductAction] = useState(0);
  // productAction : 1 == add; 2 == edit; 3 == delete;

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
          <Route path="/products" element={<Products products={products} setPage={setPage} page={page} selected={setSelectedProduct} newProduct={setNewProduct} action={setProductAction}/>} />
        </Routes>
        {/* <Edit product={selectedProduct}/> */}
        {/* {newProduct !== 0 ? <Add /> : ''} */}
        {/* <Delete product={selectedProduct}/> */}


      {(() => {
        switch (productAction) {
          case 1:
            return <Add />
          case 2: 
            return <Edit product={selectedProduct}/>
          case 3:
            return <Delete product={selectedProduct} />
          default:
            return null
        }
      })()}

      </div>
    </div>
  );
}

export default App;

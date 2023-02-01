import "./styles/app.css";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Products from "./components/Products";
import Monitor from "./components/Monitor";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./components/sub/Modal";
import Delete from "./components/sub/Delete";

function App() {
  const [products, setProducts] = useState('');
  const [page, setPage] = useState('monitor');
  const [selectedProduct, setSelectedProduct] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

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
          <Route path="/products" element={<Products products={products} setSelectedProduct={setSelectedProduct} setShowModal={setShowModal} setShowDelete={setShowDelete} />} />
          {/* <Route path="/products" element={<Products page={page} products={products}
            setFunctions={
              {
                setPage: { setPage },
                selected: { setSelectedProduct },
                newProduct: { setNewProduct },
                action: { setProductAction }
              }}
          />}
          /> */}
        </Routes>

        {/* {
          (() => {
            switch (productAction) {
              case 'add':
                return <Modal action="add" setAction={setProductAction} />
              case 'edit':
                return <Modal product={selectedProduct} action="edit" setAction={setProductAction} />
              case 'delete':
                return <Delete product={selectedProduct} setAction={setProductAction} />
              default:
                return null
            }
          })()
          
        } */}
        {showModal && <Modal data={selectedProduct} setShowModal={setShowModal} />}
        {showDelete && <Delete product={selectedProduct} setShowDelete={setShowDelete} />}
      </div>
    </div >
  );
}

export default App;

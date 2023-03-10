import "./styles/app.css";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Products from "./components/Products";
import Monitor from "./pages/Monitor";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./components/sub/Modal";
import Delete from "./components/sub/Delete";
import AddSpec from "./components/sub/AddSpec";

function App() {
  const [products, setProducts] = useState("");
  const [page, setPage] = useState("monitor");
  const [selectedProduct, setSelectedProduct] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showAddSpec, setShowAddSpec] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:2020/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch(() => console.log("error fetching"));
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="body">
        <SideMenu setPage={setPage} page={page} />
        <div className="main">
          <Routes>
            <Route path="/monitor" element={<Monitor />} />
            <Route
              path="/products"
              element={
                <Products
                  products={products}
                  setSelectedProduct={setSelectedProduct}
                  setShowModal={setShowModal}
                  setShowDelete={setShowDelete}
                />
              }
            />
            <Route path="/orders" element={<Monitor />} />
            <Route path="/users" element={<Monitor />} />
            <Route path="/moderator" element={<Monitor />} />
            <Route path="/settings" element={<Monitor />} />
          </Routes>
        </div>

        {showModal && (
          <Modal
            data={selectedProduct}
            setShowModal={setShowModal}
            setShowAddSpec={setShowAddSpec}
          />
        )}
        {showDelete && (
          <Delete product={selectedProduct} setShowDelete={setShowDelete} />
        )}
        {showAddSpec && <AddSpec setShowAddSpec={setShowAddSpec}/>}
      </div>
    </div>
  );
}

export default App;

//previously used

/* <Route path="/products" element={<Products page={page} products={products}
            setFunctions={
              {
                setPage: { setPage },
                selected: { setSelectedProduct },
                newProduct: { setNewProduct },
                action: { setProductAction }
              }}
          />}
          /> */

/* {
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
          
} */

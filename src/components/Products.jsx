import "../styles/products.css";
import Modal from "./sub/Modal";
import Add from "./sub/Add";
import RowProduct from "./sub/Row";
import Dots from "../svg/Dots";
import { useState } from "react";

export default function Products(prop) {
    const { products, setSelect, newProduct, setShowModal } = prop;
    // console.log(newProduct);

    // const { setFunctions, products, page } = prop;
    // console.log("my functions:", setFunctions)

    return <div className="products-page">
        <div className="products-header">
            <select>
                <option>All</option>
                <option>Appliances</option>
                <option>Computers & Tablets</option>
                <option>Telescope</option>
            </select>
            <button className="add-product" onClick={() => {
                console.log("add new product");
                newProduct(1);
                setShowModal(true);
                // setFunctions.newProduct.setNewProduct(1);
                // setFunctions.action.setProductAction(1);
            }}>+ Add New</button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>image</th>
                    <th>name</th>
                    <th>price</th>
                    <th>stock</th>
                    <th>sale</th>
                    <th>Category</th>
                    <th><Dots /></th>
                </tr>
            </thead>
            <tbody>
                {/* {[...products].map((product, i) => {
                    return <RowProduct product={product} key={i} selected={setFunctions.selected.setSelectedProduct} action={setFunctions.action.setProductAction} />
                })} */}
                {[...products].map((product, i) => { //product
                    return <RowProduct product={product} key={i} setSelect={setSelect} setShowModal={setShowModal} />
                })}

            </tbody>

        </table>


    </div >
}
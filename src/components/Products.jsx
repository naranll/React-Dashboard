import "../styles/products.css";
import Modal from "./sub/Modal";
import Add from "./sub/Add";
import Product from "./sub/Product";
import Dots from "../svg/Dots";
import { useState } from "react";

export default function Products(prop) {
    const { products, setSelectedProduct, setShowModal, setShowDelete } = prop;

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
                setShowModal(true);
                setSelectedProduct("");
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
                {[...products].map((product, i) => {
                    return <Product product={product} key={i} setSelectedProduct={setSelectedProduct} setShowModal={setShowModal} setShowDelete={setShowDelete} />
                })}
            </tbody>
        </table>
    </div >
}
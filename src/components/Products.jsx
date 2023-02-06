import "../styles/products.css";
import Modal from "./sub/Modal";
import Product from "./sub/Product";
import Dots from "../svg/Dots";
import ProductsLogo from "../svg/ProductsLogo";
import AddIcon from "../svg/AddIcon";
import FilterIcon from "../svg/FilterIcon";
import SearchIcon from "../svg/SearchIcon";
import { useState } from "react";

export default function Products(prop) {
    const { products, setSelectedProduct, setShowModal, setShowDelete } = prop;

    return <div className="products-page">
        <div className="products-header">
            <h2><ProductsLogo /> Products</h2>

            <button className="add-product" onClick={() => {
                console.log("add new product");
                setShowModal(true);
                setSelectedProduct("");
            }}><AddIcon /> Add New</button>

            <div className="products-header-bottom">
                <div className="products-filter">
                    <FilterIcon/>
                    <select>
                        <option>All</option>
                        <option>Appliances</option>
                        <option>Computers & Tablets</option>
                        <option>Telescope</option>
                    </select>
                </div>
                <div className="products-search">
                    <span><SearchIcon /></span>
                    <input type="search" placeholder='Search' className="products-search-input"/>
                </div> 
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>image</th>
                    <th className="product-name">name</th>
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
import "../styles/products.css";
import Edit from "./Edit";
import RowProduct from "./RowProduct";
import Dots from "../svg/Dots";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function Products(prop) {
    const { products } = prop;
    const [selectedProduct, setSelectedProduct] = useState('');
    // const navigate = useNavigate();

    return <div className="products-table">
        <div className="filter">
            <select>
                <option>All</option>
                <option>Appliances</option>
                <option>Computers & Tablets</option>
                <option>Telescope</option>
            </select>
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
                    return <RowProduct product={product} key={i} select={setSelectedProduct} />
                })}
            </tbody>

        </table>
        <Edit product={selectedProduct} />
    </div >
}
import "../styles/products.css";
import Edit from "./sub/Edit";
import Add from "./sub/Add";
import RowProduct from "./sub/Row";
import Dots from "../svg/Dots";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Products(prop) {
    const { products, page, setPage, selected, newProduct, action } = prop;
    // const [newProduct, setNewProduct] = useState();
    // console.log(newProduct);

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
                action(1);
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
                    return <RowProduct product={product} key={i} selected={selected} action={action}/>
                })}
            </tbody>

        </table>
    </div >
}
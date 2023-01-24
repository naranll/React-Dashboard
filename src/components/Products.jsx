import "../styles/products.css";
import Product from "../components/Product";
import { useNavigate } from "react-router-dom";
import {Routes, Route} from "react-router-dom";

export default function Products(prop) {
    const { products, selected } = prop;
    const navigate = useNavigate();
    return <div className="productsMonitor">
        <div>
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
                    <th>name</th>
                    <th>price</th>
                    <th>stock</th>
                    <th>sale</th>
                    <th>Category</th>
                    <th>...</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, i) => {
                    return <tr key={i}>
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                        <td>{product.stock}</td>
                        <td>{product.sale}%</td>
                        <td>{product.category}</td>
                        <td>
                            <button className="more" onClick={() => {
                                selected(product);
                                navigate(`/product/${product.id}`);
                            }}>...</button>
                        </td>
                    </tr>
                })}
            </tbody>
            {/* <Routes>
                <Route path="/product/:id" element={<Product product={selectedProduct}/>}/>
            </Routes> */}

        </table>
    </div >
}
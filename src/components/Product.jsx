import { useParams, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import "../styles/product.css";

export default function Product(prop) {
    // const { id } = useParams();
    const navigate = useNavigate();
    const { product } = prop;
    const inputRef = useRef();

    const [current, setCurrent] = useState(product);



    return <div className="modal-container">
        {product.id ? (<div className="modal-content">
            <div className="modal-header">
                <span className="close" onClick={() => navigate(-1)}>&times;</span>
                <h2>{product.name}</h2>
            </div>
            <div className="modal-body">
                <div><img alt={product.name} /></div>
                <form>
                    <div>
                        <label>Name</label>
                        <input type="text" name="productName" defaultValue={"input"} ref={inputRef} />

                        <p> {product.name}</p>
                        <label>Price</label>
                        {/* <input type="text" value={product.price} name="productPrice" /> */}
                        <p> {product.price}</p>
                    </div>
                    <div>
                        <label>Stock</label>
                        {/* <input type="text" value={product.stock} name="productStock" /> */}
                        <p> {product.stock}</p>
                        <label>Price</label>
                        {/* <input type="text" value={product.sale} name="productSale" /> */}
                        <p>{product.price}</p>
                    </div>
                    <div> <h3>Specs</h3>
                        {product.spec.map((specObject, i) => {
                            for (let prop in specObject) {
                                // console.log("spec name:",prop);
                                // console.log("spec value:",specObject[prop]);
                                return <div key={i}>
                                    <label>{prop}</label>
                                    <p>{specObject[prop]}</p>
                                </div>
                            }
                        })}
                        <input type="button" value="+Add spec" />
                    </div>
                    <div>
                        <h3>Choose category</h3>
                        <select name="category">
                            <option>All</option>
                            <option>Appliances</option>
                            <option>Computers & Tablets</option>
                            <option>Telescope</option>
                        </select>
                    </div>
                    <button type="submit">Save changes</button>
                </form>
            </div>
        </div>) : ""}

    </div>
}
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import "../styles/edit.css";

export default function Product(prop) {
    const navigate = useNavigate();
    const { product } = prop;
    const inputRef = useRef();

    const [current, setCurrent] = useState(product);
    // console.log("type of current", typeof current);


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
                        <input type="text" name="productName" defaultValue={product.name} ref={inputRef} />

                        <label>Price</label>
                        <input type="text" name="productPrice" defaultValue={product.price} ref={inputRef} />

                    </div>
                    <div>
                        <label>Stock</label>
                        <input type="text" name="productStock" defaultValue={product.stock} ref={inputRef} />

                        <label>Sale</label>
                        <input type="text" name="productSale" defaultValue={product.sale} ref={inputRef} />

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
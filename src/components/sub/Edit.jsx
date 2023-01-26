import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import "../../styles/modal.css";

export default function Edit(prop) {
    const navigate = useNavigate();
    const { product } = prop;
    const inputRef = useRef();

    const [current, setCurrent] = useState(product);
    // console.log("type of current", typeof current);


    return <div className="modal-container">
        {product.id ? (<div className="modal-content">
            <div className="modal-header">
                <span className="close" onClick={() => navigate(-1)}>
                <h1>&times;</h1></span>
                <h2>{product.name}</h2>
            </div>
            <div className="modal-body">  
                <form>
                <div className="modal-img-container"><img alt={product.name} src={product.image}/></div>
                    <div className="modal-rows">
                        <label>
                            <b>Name</b>
                            <input type="text" name="productName" defaultValue={product.name} ref={inputRef} />
                        </label>

                        <label>
                            <b>Price</b>
                            <input type="text" name="productPrice" defaultValue={product.price} ref={inputRef} />
                        </label>


                    </div>
                    <div className="modal-rows">
                        <label>
                            <b>Stock</b>
                            <input type="text" name="productStock" defaultValue={product.stock} ref={inputRef} />
                        </label>


                        <label>
                            <b>Sale</b>
                            <input type="text" name="productSale" defaultValue={product.sale} ref={inputRef} />
                        </label>


                    </div>
                    <div> <h4>Specs</h4>
                        {product.spec.map((specObject, i) => {
                            for (let prop in specObject) {
                                return <div key={i} className="modal-rows">
                                    <label>
                                        <b>{prop}</b>
                                        <input type="text" defaultValue={specObject[prop]} ref={inputRef} />
                                    </label>
                                </div>
                            }
                        })}
                        <input type="button" value="+Add spec" />
                    </div>
                    <div>
                        <h3>Choose category</h3>
                        <select name="category">
                            <option>Appliances</option>
                            <option>Computers & Tablets</option>
                            <option>Gaming console</option>
                            <option>Telescope</option>
                        </select>
                    </div>
                    <button type="submit">Save changes</button>
                </form>
            </div>
        </div>) : ""}

    </div>
}
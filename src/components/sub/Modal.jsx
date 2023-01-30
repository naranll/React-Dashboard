import axios from "axios";
import { useState } from "react";
import "../../styles/modal.css";

export default function Modal(prop) {
    const { data: product, setShowModal } = prop;


    // const submitForm = () => {
    //     //create object 
    //     const newPost = {
    //         title,
    //         description,
    //         category
    //     }
    //     axios.post("portname", newPost)
    //         .then((res) => console.log(res.data))
    //         .catch((req) => console.log(err))
    // }
    console.log("selected:", product)


    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(e.target.productName.value);
        const newProduct = {
            name: e.target.productName.value,
            price: e.target.productPrice.value,
            stock: e.target.productStock.value,
            sale: e.target.productSale.value,
        }
        // axios.post("http://localhost:2020/products", newProduct)
        //     .then((response) => console.log(response))
        //     .catch((response) => console.log("error posting"))
        console.log(newProduct);
    }

    return <div className="modal-container">
        {(<div className="modal-content">
            <div className="modal-header">
                <span className="close" onClick={() => setShowModal(false)}>
                    <h1>&times;</h1></span>
                <h2>{product && product.name}</h2>
            </div>
            <div className="modal-body">
                <form onSubmit={submitHandler}>
                    <div className="modal-img-container"><img alt={product && product.name} src={product && product.image} /></div>
                    <div className="modal-rows">
                        <label>
                            <b>Name</b>
                            {/* <input type="text" name="productName" value={product && product.name} onChange={(e) => setProductName(e.target.value)} ref={inputRef} /> */}
                            <input type="text" name="productName" defaultValue={product && product.name} />
                        </label>

                        <label>
                            <b>Price</b>
                            <input type="text" name="productPrice" defaultValue={product && product.price} />
                        </label>
                    </div>

                    <div className="modal-rows">
                        <label>
                            <b>Stock</b>
                            <input type="text" name="productStock" defaultValue={product && product.stock} />
                        </label>
                        <label>
                            <b>Sale</b>
                            <input type="text" name="productSale" defaultValue={product && product.sale} />
                        </label>
                    </div>

                    <div> <h4>Specs</h4>
                        {product ? <div>{product.spec.map((specObject, i) => {
                            for (let prop in specObject) {
                                return <div key={i} className="modal-rows">
                                    <label>
                                        <b>{prop}</b>
                                        <input type="text" defaultValue={specObject[prop]} />
                                    </label>
                                </div>
                            }
                        })}</div> : ''}
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
                {/* <form onSubmit={getInput}>
                    <div className="modal-img-container"><img alt={product && product.name} src={product && product.image} /></div>
                    <div className="modal-rows">
                        <label>
                            <b>Name</b>
                            <input type="text" name="productName" defaultValue={product && product.name} ref={inputRef} />
                        </label>

                        <label>
                            <b>Price</b>
                            <input type="text" name="productPrice" defaultValue={product && product.price} ref={inputRef} />
                        </label>
                    </div>

                    <div className="modal-rows">
                        <label>
                            <b>Stock</b>
                            <input type="text" name="productStock" defaultValue={product && product.stock} ref={inputRef} />
                        </label>
                        <label>
                            <b>Sale</b>
                            <input type="text" name="productSale" defaultValue={product && product.sale} ref={inputRef} />
                        </label>
                    </div>

                    <div> <h4>Specs</h4>
                        {product ? <div>{product.spec.map((specObject, i) => {
                            for (let prop in specObject) {
                                return <div key={i} className="modal-rows">
                                    <label>
                                        <b>{prop}</b>
                                        <input type="text" defaultValue={specObject[prop]} ref={inputRef} />
                                    </label>
                                </div>
                            }
                        })}</div> : ''}
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
                </form> */}
            </div>
        </div>)}

    </div>
}
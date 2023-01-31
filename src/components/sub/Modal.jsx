import axios from "axios";
import { useState } from "react";
import "../../styles/modal.css";

export default function Modal(prop) {
    const { data: product, setShowModal } = prop;
    const [showNewSpec, setShowNewSpec] = useState(false);
    // const specArray = [];
    const [specArray, setSpecArray] = useState([])

    const submitHandler = (e) => {
        e.preventDefault();
        const newObj = {
            name: e.target.productName.value,
            price: e.target.productPrice.value,
            stock: e.target.productStock.value,
            sale: e.target.productSale.value,
            category: e.target.category.value,
        };
        console.log("input newProduct:", newObj);
        if (product) {
            console.log(product);
        } else {
            addNew(newObj);
        }
    }

    function addNew(newProduct) {
        axios.post("http://localhost:2020/products", newProduct)
            .then((response) => {
                // console.log(response)
                response && setShowModal(false);
            }
            )
            .catch(() => console.log("error posting axios"))
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
                    {/* <div className="modal-img-container"><img alt={product && product.name} src={product && product.image} /></div> */}
                    <div className="modal-img-container">
                        <input type="image" src={product && product.image} alt={product && product.name} className="productImage" />
                    </div>
                    <div className="modal-rows">
                        <label>
                            <b>Name</b>
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

                    <div className="spec-container"> <h4>Specs</h4>
                        {product && product.spec && <div>{product.spec.map((specObject, i) => {
                            for (let prop in specObject) {
                                return <div key={i} className="modal-rows">
                                    <label >
                                        <b>{prop}</b>
                                        <input type="text" defaultValue={specObject[prop]} />
                                    </label>
                                </div>
                            }
                        })}</div>}

                        <div>
                            <h3>New spec</h3>
                            {showNewSpec && specArray.map((n, i) => {
                                return <NewSpec key={i} />
                            })}
                            {/* {showNewSpec && <NewSpec />} */}
                        </div>

                        <input type="button" value="+Add spec" className="spec-btn" onClick={() => {
                            setShowNewSpec(true);
                            // specArray.push("el");
                            setSpecArray([...specArray, ''])
                            console.log("array", specArray);
                        }} />
                    </div>

                    <div>
                        <h3>Choose category</h3>
                        <select name="category">
                            <option value="Applainces">Appliances</option>
                            <option value="Computers & Tablets">Computers & Tablets</option>
                            <option value="Gaming console">Gaming console</option>
                            <option value="Telescope">Telescope</option>
                        </select>
                    </div>

                    <button type="submit" className="submit">Save changes</button>
                </form>
            </div>
        </div>)}
    </div>
}

export function NewSpec() {
    return <div className="modal-rows">
        <label className="spec-label">
            <input type="text" placeholder="New Spec name" className="spec-label" />
            <input type="text" placeholder="New Spec" />
        </label>
    </div>
}


//previously used
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
                            return <div key={i} className="modal-rows"
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
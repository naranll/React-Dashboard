import axios from "axios";
import { useState } from "react";
import "../../styles/modal.css";

export default function Modal(prop) {
    const { data: product, setShowModal } = prop;
    const [showNewSpec, setShowNewSpec] = useState(false);
    const [specNumber, setSpecNumber] = useState([]);
    //currently not using
    const [newSpecValues, setNewSpecValues] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log("new spec", e.target.specName.value);
        let newSpec = {};
        newSpec[e.target.specName.value] = e.target.specValue.value;
        console.log("new spec", newSpec)

        setNewSpecValues([...newSpecValues, { [e.target.specName.value]: e.target.specValue.value }])

        const newObj = {
            name: e.target.productName.value,
            price: e.target.productPrice.value,
            stock: e.target.productStock.value,
            sale: e.target.productSale.value,
            category: e.target.category.value,
            spec: newSpecValues,
        };
        console.log("input newProduct:", newObj);

        if (product) {
            const editedObj = {
                id: product.id,
                ...newObj
            }
            editProduct(editedObj);
        } else {
            addNew(newObj);
        }
    }

    function editProduct(product) {
        axios.patch(`http://localhost:2020/products/${product.id}`, product)
            .then((response) => {
                response && setShowModal(false);
            })
            .catch(() => console.log("error editing product"));
    }

    function addNew(newProduct) {
        axios.post("http://localhost:2020/products", newProduct)
            .then((response) => {
                console.log(response)
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
                    <div className="modal-img-container">
                        {/* <input type="image" src={product && product.image} alt={product && product.name} className="productImage" /> */}
                        <input type="text" name="productImage" defaultValue={product && product.image} />
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
                    {/* <div className="modal-rows"> */}
                        <label>
                            <b>Stock</b>
                            <input type="text" name="productStock" defaultValue={product && product.stock} />
                        </label>
                        <label>
                            <b>Sale</b>
                            <input type="text" name="productSale" defaultValue={product && product.sale} />
                        </label>
                    {/* </div> */}

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
                            {showNewSpec && specNumber.map((n, i) => {
                                return <NewSpec key={i} newSpecValues={newSpecValues} setNewSpecValues={setNewSpecValues} specNumber={specNumber} />
                            })}
                        </div>
                        <input type="button" value="+Add spec" className="spec-btn" onClick={() => {
                            setShowNewSpec(true);
                            setSpecNumber([...specNumber, ''])
                            console.log("how many spec:", specNumber.length);
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

export function NewSpec(prop) {
    const { newSpecValues, setNewSpecValues, specNumber } = prop;

    return <div className="modal-rows">
        <label className="spec-label">
            <input type="text" name={'name' + { specNumber }} placeholder="New Spec name" className="spec-label" />
            <input type="text" name="specValue" placeholder="New Spec" />
        </label>
    </div>
}

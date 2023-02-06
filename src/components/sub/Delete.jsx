import axios from "axios";
import { useState } from "react";
import "../../styles/modal.css";
import "../../styles/delete.css";

export default function Delete(prop) {
    const { product, setShowDelete } = prop;

    function deleteHandler() {
        console.log("deleted product:", product.id);
        // setShowDelete(false);
        axios.delete(`http://localhost:2020/products/${product.id}`)
            .then((response) => console.log(response))
            .catch((() => console.log("error from back-end")));
    }

    return <div className="delete-container">
        <div className="delete-content">
            <div className="delete-body">
            <p>Are you sure you wanna delete product: {product.id}?</p>
                <div className="modal-row">
                    <button onClick={deleteHandler} className="yes-btn">YES</button>
                    <button onClick={() => setShowDelete(false)} className="cancel-btn">Cancel</button>
                </div>
            </div>
        </div>
    </div>
}
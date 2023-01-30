import { useState } from "react";
import "../../styles/modal.css";

export default function Delete(prop) {
    const { product, setShowDelete } = prop;

    function deleteHandler() {
        console.log("deleted product:", product.id);
        setShowDelete(false);
    }

    return <div className="modal-container">
        <div className="modal-content">
            <div className="modal-header">
                <span className="close" onClick={() => setShowDelete(false)}>&times;</span>
                <h2>Are you sure you wanna delete product: {product.id}?</h2>
            </div>
            <div className="modal-body">
                <button onClick={deleteHandler}>YES</button>
                <button onClick={() => setShowDelete(false)}>Cancel</button>
            </div>
        </div>
    </div>
}
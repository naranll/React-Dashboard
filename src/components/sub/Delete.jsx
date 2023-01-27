import { useState } from "react";
import "../../styles/modal.css";

export default function Delete(prop) {
    const { product, setAction } = prop;

    return <div className="modal-container">
        <div className="modal-content">
            <div className="modal-header">
                <span className="close" onClick={() => setAction(0)}>&times;</span>
                <h2>Are you sure you wanna delete product: {product.id}?</h2>
            </div>
            <div className="modal-body">
                <button onClick={() => {
                    console.log("deleted product:", product.id);
                }}>YES</button>
                <button>Cancel</button>
            </div>
        </div>
    </div>
}
import { useNavigate } from "react-router-dom";
import { useState} from "react";
import "../../styles/modal.css";

export default function Delete(prop) {
    const navigate = useNavigate();
    const {product} =prop;


    return <div className="modal-container">
        <div className="modal-content">
            <div className="modal-header">
                <span className="close" onClick={() => navigate(-1)}>&times;</span>
                <h2>Are you sure you wanna delete product: {product.id}?</h2>
            </div>
            <div className="modal-body">
                <button onClick={()=>{
                    console.log("deleted product:", product.id);
                }}>YES</button>
                <button>Cancel</button>
            </div>
        </div>
    </div>
}
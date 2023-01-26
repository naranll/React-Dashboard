import { useNavigate } from "react-router-dom";
// import { useState} from "react";
import "../../styles/modal.css";

export default function Add(prop) {
    const navigate = useNavigate();
    const { setNew } = prop;

    function getInput(input) {
        console.log("form submit");
        console.log("name:", input.target.newName.value);
        setNew(input);
    }

    return <div className="modal-container">
        <div className="modal-content">
            <div className="modal-header">
                <span className="close" onClick={() => navigate(-1)}><h1>&times;</h1></span>
                <h2>New Product</h2>
            </div>
            <div className="modal-body">
                <form onSubmit={getInput}>
                    <div className="modal-img-container"></div>
                    <div className="modal-rows">
                        <label>
                            <b>Name</b>
                            <input type="text" name="newName" />
                        </label>
                        <label>
                            <b>Price</b>
                            <input type="text" name="newPrice" />
                        </label>
                    </div>
                    <div className="modal-rows">
                        <label>
                            <b>Stock</b>
                            <input type="text" name="newStock" />
                        </label>
                        <label>
                            <b>Sale</b>
                            <input type="text" name="newSale" />
                        </label>
                    </div>
                    <div>
                        <h3>Choose category</h3>
                        <select name="newCategory">
                            <option>Appliances</option>
                            <option>Computers & Tablets</option>
                            <option>Gaming console</option>
                            <option>Telescope</option>
                        </select>
                    </div>
                    <button type="submit">Save changes</button>
                </form>
            </div>
        </div>
    </div>
}
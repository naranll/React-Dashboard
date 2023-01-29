// import Edit from "./Edit";
import "../../styles/row.css";
import "../../styles/dropdown.css";
import Dots from "../../svg/Dots";
import Modal from "./Modal";
import { useState } from "react"

export default function RowProduct(prop) {
    const { product, setSelect, action, setShowModal } = prop;
    const [dropShow, setDropShow] = useState(false)

    function editBtnHandler() {
        setShowModal(true)
        setSelect(product)
    }
    return <>
        <tr className="product-row">
            <td className="product-image"> <img src={product.image} /></td>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>{product.stock}</td>
            <td>{product.sale}%</td>
            <td><p className="category">{product.category}</p></td>
            <td>
                <div className="dropdown" style={{ position: "relative" }}>
                    <button className="more dropbtn" onClick={setDropShow}><Dots /></button>
                    {/*<div className="dropdown-content">
                        <a onClick={() => {
                            selected(product);
                            action('edit');
                        }}>Edit</a>

                        <a onClick={() => {
                            selected(product);
                            action('delete');
                        }}>Delete</a>
                    </div> */}
                    {dropShow && <div style={{ width: "100px", height: "100px", position: "absolute", backgroundColor: "green" }}>
                        <button onClick={editBtnHandler} style={{ width: "100px" }}>Edit</button>
                        <button style={{ width: "100px" }}>Delete</button>
                    </div>}
                </div>
            </td>
        </tr>

    </>
}


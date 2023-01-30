// import Edit from "./Edit";
import "../../styles/row.css";
import "../../styles/dropdown.css";
import Dots from "../../svg/Dots";
import Modal from "./Modal";
import Delete from "./Delete";
import { useState } from "react"

export default function Product(prop) {
    const { product, setSelectedProduct, setShowModal, setShowDelete } = prop;
    const [dropShow, setDropShow] = useState(false)

    function editBtnHandler() {
        setShowModal(true);
        setSelectedProduct(product);
    }

    function deleteBtnHandler() {
        setShowDelete(true);
        setSelectedProduct(product);
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

                    {dropShow && <div className="dropdown-content">
                        <button onClick={editBtnHandler} className="optionBtn">Edit</button>
                        <button onClick={deleteBtnHandler} className="optionBtn">Delete</button>
                    </div>}
                </div>
            </td>
        </tr>

    </>
}


//previously used functions
{/* <div className="dropdown-content">
        <a onClick={() => {
            selected(product);
            action('edit');
        }}>Edit</a>

        <a onClick={() => {
            selected(product);
            action('delete');
        }}>Delete</a>
</div> */}
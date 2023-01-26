// import Edit from "./Edit";
import "../../styles/row.css";
import "../../styles/dropdown.css";
import Dots from "../../svg/Dots";

export default function RowProduct(prop) {
    const { product, selected, action } = prop;

    return <tr className="product-row">
        <td className="product-image"> <img src={product.image} /></td>
        <td>{product.name}</td>
        <td>${product.price}</td>
        <td>{product.stock}</td>
        <td>{product.sale}%</td>
        <td><p className="category">{product.category}</p></td>
        <td>
            <div className="dropdown">
                <button className="more dropbtn" ><Dots /></button>
                <div className="dropdown-content">
                    <a onClick={() => {
                        selected(product);
                        action(2);
                    }}>Edit</a>

                    <a onClick={()=>{
                        selected(product);
                        action(3);
                    }}>Delete</a>
                </div>
            </div>
        </td>
    </tr>
}


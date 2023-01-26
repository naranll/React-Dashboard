// import Edit from "./Edit";
import "../styles/row.css";
import "../styles/dropdown.css";
import Dots from "../svg/Dots";

export default function RowProduct(prop) {
    const { product, select } = prop;

    return <tr className="product-row">
        <td className="product-image"> <img src={product.image} /></td>
        <td>{product.name}</td>
        <td>${product.price}</td>
        <td>{product.stock}</td>
        <td>{product.sale}%</td>
        <td><p className="category">{product.category}</p></td>
        <td>

            <div className="dropdown">
                {/* <button class="dropbtn">Dropdown</button> */}
                <button className="more dropbtn" ><Dots /></button>
                <div className="dropdown-content">
                    <a onClick={() => {
                        select(product);
                    }}>Edit</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
        </td>
    </tr>
}


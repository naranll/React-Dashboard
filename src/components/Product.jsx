import { useParams, useNavigate } from "react-router-dom";
import "../styles/product.css";

export default function Product(prop) {
    const { id } = useParams();
    const navigate = useNavigate();
    const { product } = prop;
    // console.log("selected product at product.jsx:", product);

    return <div className="modal-container">
        {product.id === id ? (<div className="modal-content">
            <div className="modal-header">
                <span className="close" onClick={()=> navigate(-1)}>&times;</span>
                <h2>{product.name}</h2>
            </div>
            <div className="modal-body">
                <div><img alt={product.name} /></div>
                <form>
                    <div>
                        <h4>Name</h4>
                        {/* <input type="text" value={product.name} name="productName" /> */}
                        <p> {product.name}</p>
                        <h4>Price</h4>
                        {/* <input type="text" value={product.price} name="productPrice" /> */}
                        <p> {product.price}</p>
                    </div>
                    <div>
                        <h4>Stock</h4>
                        {/* <input type="text" value={product.stock} name="productStock" /> */}
                        <p> {product.stock}</p>
                        <h4>Price</h4>
                        {/* <input type="text" value={product.sale} name="productSale" /> */}
                        <p>{product.price}</p>
                    </div>
                    <div> <h3>Specs</h3>
                        {product.spec.map((specObject, i) => {
                            for (let prop in specObject) {
                                // console.log("spec name:",prop);
                                // console.log("spec value:",specObject[prop]);
                                return <div key={i}>
                                    <h4>{prop}</h4>
                                    <p>{specObject[prop]}</p>
                                </div>
                            }
                        })}
                        <input type="button" value="+Add spec" />
                    </div>
                    <div>
                        <h3>Choose category</h3>
                        <select name="category">
                            <option>All</option>
                            <option>Appliances</option>
                            <option>Computers & Tablets</option>
                            <option>Telescope</option>
                        </select>
                    </div>
                    <button type="submit">Save changes</button>
                </form>
            </div>
        </div>) : <h1>error</h1>}


    </div>
}
import "../styles/products.css";
import Product from "../components/Product";

export default function Products(prop) {
    const { products } = prop;
    return <div className="productsMonitor">
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>price</th>
                    <th>stock</th>
                    <th>sale</th>
                    <th>Category</th>
                    <th>...</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, i) => {
                    return <tr key={i}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                        <td>{product.sale}%</td>
                        <td>{product.category}</td>
                        <td>
                            <button className="more" onClick={() => {
                                console.log(product);
                                <Product productInfo={product} />
                            }}>...</button>
                        </td>
                    </tr>
                })}
            </tbody>

        </table>
    </div >
}
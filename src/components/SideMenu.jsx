import "../styles/sidemenu.css"
import { useNavigate } from "react-router-dom";

export default function SideMenu(prop) {
    const navigate = useNavigate();
    const { page, setPage } = prop;

    function navigateBtn(path, page) {
        navigate(path);
        setPage(page);
    }


    return <div className="side">
        <ul>
            <li onClick={() => navigateBtn('/', 'monitor')} className={page === 'monitor' ? "selected" : "n"}>Monitor</li>
            <li onClick={() => navigateBtn('/products', 'products')} className={page === 'products' ? "selected" : "n"}>Products</li>
            <li onClick={() => navigateBtn('/', 'orders')} className={page === 'orders' ? "selected" : "n"}>Orders</li>
            <li onClick={() => navigateBtn('/', 'users')} className={page === 'users' ? "selected" : "n"}>Users</li>
            <li onClick={() => navigateBtn('/', 'moderator')} className={page === 'moderator' ? "selected" : "n"}>Moderator</li>
            <li onClick={() => navigateBtn('/', 'settings')} className={page === 'settings' ? "selected" : "n"}>Settings</li>
        </ul>
    </div >
}
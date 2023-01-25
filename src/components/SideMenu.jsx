import "../styles/sidemenu.css"
import { useNavigate } from "react-router-dom";

export default function SideMenu() {
    const navigate = useNavigate();
    return <div className="side">
        <ul>
            <li onClick={() => navigate('/')}>Products</li>
            <li>Menu2</li>
            <li>Menu3</li>
        </ul>
    </div>
}
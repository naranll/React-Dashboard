import "../styles/sidemenu.css"
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import ModeratorLogo from "../svg/ModeratorLogo";
import MonitorLogo from "../svg/MonitorLogo";
import OrdersLogo from "../svg/OrdersLogo";
import ProductsLogo from "../svg/ProductsLogo";
import SettingsLogo from "../svg/SettingsLogo";
import UsersLogo from "../svg/UsersLogo";

export default function SideMenu(prop) {
    const navigate = useNavigate();
    const { page, setPage } = prop;
    const [currentColor, setCurrentColor] = useState();


    function navigateBtn(path, page) {
        navigate(path);
        setPage(page);
    }


    return <div className="sidemenu">
        <ul>
            <li onClick={() => {navigateBtn('/monitor'); setPage("monitor")}} className={page === 'monitor' ? "selected" : ""}>
                <MonitorLogo />

                {/* if sth is true then send prop if not then don't */}
                <span>Monitor</span>
            </li>

            <li onClick={() => {navigateBtn('/products'), setPage("products")}} className={page === 'products' ? "selected" : ""}>
                <ProductsLogo />
                <span>Products</span>
            </li>
            <li onClick={() => {navigateBtn('/orders'), setPage("orders")}} className={page === 'orders' ? "selected" : ""}>
                <OrdersLogo />
                <span>Orders</span>
            </li>
            <li onClick={() => {navigateBtn('/users'), setPage("users")}} className={page === 'users' ? "selected" : ""}>

                <UsersLogo />
                <span>Users</span>
            </li>
            <li onClick={() => {navigateBtn('/moderator'), setPage("moderator")}} className={page === 'moderator' ? "selected" : ""}>
                <ModeratorLogo />
                <span>Moderator</span>
            </li>
            <li onClick={() => {navigateBtn('/settings'), setPage("settigns")}} className={page === 'settings' ? "selected" : ""}>
                <SettingsLogo />
                <span>Settings</span>
            </li>
        </ul>
    </div >
}
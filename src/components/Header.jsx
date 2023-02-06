import "../styles/header.css";
import Logo from "../svg/Logo.jsx";
import LogOut from "../svg/LogOut.jsx";

export default function Header() {
    return <div className="header">
        <Logo />
        <form className="header-search">
            <input type="search" className="search-field" />
            <button className="search-btn">Search</button>
        </form>
        <div className="logout">
            <LogOut />
            Log Out
        </div>

    </div>
}

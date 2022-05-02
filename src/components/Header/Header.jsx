import "./Header.css";
import Logo from "../../assets/Logo.svg"
//components
import ButtonProfile from "./ButtonProfile/ButtonProfile";
import ButtonMobile from "./ButtonMobile/ButtonMobile";
import SearchBar from "./SearchBar/SearchBar";
import ShoppingCart from "./ButtonShoppingCart/ShoppingCart"

export default function Header() {
    return (
        <header className="header">
            <nav className="navbar-container">
                <ButtonMobile />
                <img src={Logo} className="logo" alt="logo" />
                <SearchBar />
                <ButtonProfile />
                <ShoppingCart />
            </nav>
        </header>
    )
} 
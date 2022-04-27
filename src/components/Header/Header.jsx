import "./Header.css"
import CorebizLogo from "./../../assets/CorebizLogo.png"

export default function Header() {
    return (

        <header className="header">

            <button className="btn mobileIcon" aria-label="Abrir menú">
                <i className="fas fa-bars"></i>
            </button>

            <div className="in-flex">
                <img src={CorebizLogo} className="logo" />
                <div className="search-box">
                    <input className="inputSearch" type="text" name="" placeholder="¿Que estas buscando?" />
                    <button className="btn">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>

            <button className="btn" >
                <span className="user">
                    <i class="fa-regular fa-user"></i>
                    <p class="regular-font"> Mi cuenta</p>
                </span>
            </button>

            <button className="btn" aria-label="Abrir carrito">
                <i class="fa-solid fa-cart-shopping"></i>
            </button>

        </header>

    )
} 
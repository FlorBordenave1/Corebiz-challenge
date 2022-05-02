import "./ButtonMobile.css";
import mobileIcon from "../../../assets/Icons/mobileIcon.svg";

export default function ButtonMobile() {
    return (
        <button className="mobile-btn">
            <img src={mobileIcon} alt="menu-icon" />
        </button>
    )
} 
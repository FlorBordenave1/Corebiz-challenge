import "./FooterButton.css"

export default function FooterButton({ text, icon }) {
    return (
        <button className="footer-button">
            <img src={icon} className="footer-btn-icon" alt="icon" />
            <span className="footer-btn-span">{text}</span>
        </button>
    )
} 
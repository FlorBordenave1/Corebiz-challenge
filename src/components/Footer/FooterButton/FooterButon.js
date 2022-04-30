import "./FooterButton.css"

export default function FooterButton({ text, icon }) {
    return (
        <button className="footer-button">
            <img src={icon} className="footer-btn-icon" alt="icon" />
            {text}
        </button>
    )
} 
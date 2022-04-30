import "./FooterIcon.css"

export default function FooterIcon({ text, icon, name }) {
    return (
        <div >
            <p>{text}</p>
            <img src={icon} alt={`${name}-icon`} className={`footer-${name}-icon`} />
        </div>
    )
}
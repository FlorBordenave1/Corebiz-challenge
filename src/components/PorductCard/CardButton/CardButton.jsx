import "./CardButton.css"

export default function CardButton({ onClick }) {
    return (
        <button
            onClick={() => onClick()}
            className="button"
        >
            COMPRAR
        </button>
    )
}
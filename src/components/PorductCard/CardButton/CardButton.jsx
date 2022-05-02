import "./CardButton.css"

export default function CardButton({ onClick, handleClickOpen, name, price }) {
    return (
        <button
            onClick={() => { onClick(); handleClickOpen(name, price) }}
            className="button"
        >
            COMPRAR
        </button>
    )
}
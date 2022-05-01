import { useContext } from "react"
import "./NewsLetter.css"
//components
import NewsLetterForm from "./Form/NewsLetterForm"
//context 
import SubscribeContext from "../../context/SubscribeContext/SubscribeContext"

export default function NewsLetter() {

    const subscribeContext = useContext(SubscribeContext)

    const onSubmit = (data) => {
        subscribeContext.postNewUserSuscribe(data);
    }

    return (
        <div className="news-letter">
            <h2 className="news-letter-title"> ¡Únete a nuestras novedades y promociones!</h2>
            <NewsLetterForm onSubmit={onSubmit} />
        </div>
    )
}
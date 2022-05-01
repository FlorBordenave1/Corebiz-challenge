
import "./ProductCard.css"
//components
import CardButton from "./CardButton/CardButton"
import RatingProducts from "./RatingProduct/RatingProduct"

export default function ProductCard({
    image,
    key,
    listPrice,
    productName,
    price,
    quantity,
    quantityValue,
    rating,
    precioFormatter,
}) {

    return (



        // si listprice que me aprique el estilo con el OFF sino el que no tiene
        <article key={key} className="article-container">

            <img src={image} alt={productName} className="article-image" />

            <body className="article-content">
                <h3 className="article-name"> {productName} </h3>
                <RatingProducts value={rating} />
                <p
                    className={listPrice ? "article-price off" : "article-price"}
                >
                    {`de $ ${precioFormatter(price.toString())}`}
                </p>

                {listPrice ?
                    <p className="article-list-price">{`por $${precioFormatter(listPrice.toString())}`}</p>
                    : null
                }

                {quantity && quantityValue ?
                    <p className="article-price-fee">{`o en ${quantity} de R $${quantityValue}`}</p>
                    : null
                }
                <CardButton />
            </body>
        </article>
    )
}
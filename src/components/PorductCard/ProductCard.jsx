
import "./ProductCard.css"
//components
import CardButton from "./CardButton/CardButton"
import RatingProducts from "./RatingProduct/RatingProduct"

export default function ProductCard({
    addNewProduct,
    image,
    key,
    listPrice,
    productName,
    price,
    quantity,
    quantityValue,
    rating,
    precioFormatter,
    handleClickOpen,
}) {

    return (

        <article key={key} className="article-container">
            <div className={listPrice && "on-sale-container"}>
                {listPrice && <div className="on-sale"><p>OFF</p></div>}

                <img src={image} alt={productName} className="article-image" />
            </div>

            <div className="article-content">
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
                <CardButton
                    onClick={addNewProduct}
                    handleClickOpen={handleClickOpen}
                    name={productName}
                    price={listPrice ? listPrice : price}
                />
            </div>
        </article>
    )
}
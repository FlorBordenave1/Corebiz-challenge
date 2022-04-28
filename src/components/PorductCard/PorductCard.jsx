

export default function PorductCard({
    image,
    key,
    listPrice,
    productName,
    price,
    quantity,
    quantityValue,
    stars,
}) {
    console.log('nombre del producto', productName)
    return (

        // si listprice que me aprique el estilo con el OFF sino el que no tiene
        <section key={key}>
            <header>
                <img src={image} />
            </header>
            <body>
                <p>
                    {productName}
                </p>
                <p>estrellas :{stars}</p>
                <p>{`de $${price}`}</p>
                {
                    listPrice ? <p>{`por $${listPrice}`}</p> : null
                }

                {
                    quantity && quantityValue ?
                        <p>{`o en ${quantity} de R $${quantityValue}`}</p> : null
                }
            </body>
            <footer>
                <button>comprar</button>
            </footer>
        </section>
    )
}
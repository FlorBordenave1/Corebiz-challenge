import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PorductCard from "../PorductCard/PorductCard"

const ArticleGallery = ({ products }) => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section>
            <h2> Mas Vendidos </h2>
            <Slider {...settings}>
                {
                    products?.map((product, i) => (
                        <PorductCard
                            image={product.imageUrl}
                            key={i}
                            listPrice={product.listPrice}
                            productName={product.productName}
                            price={product.price}
                            quantity={product.installments[0]?.quantity}
                            quantityValue={product.installments[0]?.value}
                            stars={product.stars}
                        />

                    ))
                }
            </Slider>
        </section>
    )
}


export default ArticleGallery
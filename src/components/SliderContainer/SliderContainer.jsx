import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../PorductCard/ProductCard";
import "./SliderContainer.css"

const SliderContainer = ({ products }) => {

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

    const precioFormatter = (number) => {
        let price = '';
        for (let i = 0; i < number?.length; i++) {
            price = number.slice(0, number.length - 2) + '.' + number.slice(number.length - 2)
        }
        return price
    }

    console.log('products', products)

    return (
        <div className="slider-container">
            <div className="slider-content">
                <h2> Mas Vendidos </h2>
                <Slider {...settings}>
                    {
                        products?.map(({ imageUrl, listPrice, productName, price, installments, stars }, i) => (
                            <ProductCard
                                image={imageUrl}
                                key={i}
                                listPrice={listPrice}
                                productName={productName}
                                price={price}
                                quantity={installments[0]?.quantity}
                                quantityValue={installments[0]?.value}
                                rating={stars}
                                precioFormatter={precioFormatter}
                            />
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}


export default SliderContainer
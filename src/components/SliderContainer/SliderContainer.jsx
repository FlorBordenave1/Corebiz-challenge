import React, { useContext, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderContainer.css"
//components
import ProductCard from "../PorductCard/ProductCard";
import ProductsContext from "../../context/ProductsContext/ProductsContext";
import AlertNewProduct from "../PorductCard/AlertProduct/AlertNewProduct"
import PrevArrow from "./PrevArrow/PrevArrow";
import NextArrow from "./NextArrow/NextArrow";

const SliderContainer = ({ products }) => {

    const settings = {
        dots: false,
        infinite: true,
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
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ],
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };

    const { countProducts, setCountProducts, searchingProducts, search } = useContext(ProductsContext)

    const [open, setOpen] = useState(false);
    const [dataProduct, setDataProduct] = useState({ name: '', price: '' })

    const precioFormatter = (number) => {
        let price = '';
        for (let i = 0; i < number?.length; i++) {
            price = number.slice(0, number.length - 2) + '.' + number.slice(number.length - 2)
        }
        return price
    }

    const addNewProduct = () => {
        setCountProducts(countProducts => countProducts + 1)
        localStorage.setItem('countProducts', countProducts + 1)
    }

    const handleClickOpen = (name, price) => {
        setOpen(true);
        setDataProduct({ ...dataProduct, name: name, price: precioFormatter(price.toString()) })
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="slider-container">
            <div className="slider-content">
                <h2 className="slider-title"> Más Vendidos </h2>
                <div className="slider-line-decoration"></div>
                <Slider {...settings}>
                    {
                        products && products
                            .filter(searchingProducts(search))
                            .map(({ imageUrl, listPrice, productName, price, installments, stars, productId }) => (
                                <ProductCard
                                    image={imageUrl}
                                    key={productId}
                                    listPrice={listPrice}
                                    productName={productName}
                                    price={price}
                                    quantity={installments[0]?.quantity}
                                    quantityValue={installments[0]?.value}
                                    rating={stars}
                                    precioFormatter={precioFormatter}
                                    addNewProduct={addNewProduct}
                                    handleClickOpen={handleClickOpen}
                                />
                            ))
                    }
                </Slider>
                <AlertNewProduct open={open} data={dataProduct} close={handleClose} />
            </div>
        </div>
    )
}

export default SliderContainer
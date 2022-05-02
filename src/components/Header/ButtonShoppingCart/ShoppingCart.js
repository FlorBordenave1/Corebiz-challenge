import React, { useContext } from 'react'
import { BsCart4 } from 'react-icons/bs';
import './ShoppingCart.css'
import ProductsContext from '../../../context/ProductsContext/ProductsContext';

export default function ShoppingCart() {

    const { countProducts } = useContext(ProductsContext)

    return (

        <div className="container-cart">
            <BsCart4 className="cart-icon" />
            <span className="cart-counter">{countProducts ?? 0}</span>
        </div>
    )
}
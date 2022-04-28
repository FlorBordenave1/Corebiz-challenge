import React from 'react'
import { BsCart4 } from 'react-icons/bs';
import './ShoppingCart.css'

export const ShoppingCart = () => {
    return (

        <div className="container-cart">
            <BsCart4 className="cart-icon" />
            <span className="cart-counter">0</span>
        </div>
    )
}
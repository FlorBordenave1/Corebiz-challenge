import { useState } from "react";
import axios from "axios";
import ProductsContext from "./ProductsContext";

const ProductsState = ({ children }) => {

    const [products, setProducts] = useState([])

    const getProducts = async () => {

        const url = "https://corebiz-test.herokuapp.com/api/v1/products";
        try {
            const res = await axios.get(url);
            if (res.status === 200 || res.status === 201) {
                setProducts(res.data)
            }
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <ProductsContext.Provider
            value={{
                products,
                getProducts,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};
export default ProductsState;
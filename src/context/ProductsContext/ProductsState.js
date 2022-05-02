import { useEffect, useState } from "react";
import axios from "axios";
import ProductsContext from "./ProductsContext";

const ProductsState = ({ children }) => {

    const [products, setProducts] = useState([])

    const [search, setSearch] = useState("");

    const [countProducts, setCountProducts] = useState(() => {
        return localStorage.getItem('countProducts') ?? null
    })

    useEffect(() => {
        if (localStorage.getItem('countProducts')) {
            setCountProducts(Number(localStorage.getItem('countProducts')))
        }
    }, [])

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

    const searchingProducts = (search) => {
        return function (x) {
            const names = x.productName.toLowerCase()
            return names.includes(search) || !search;
        };
    };


    return (
        <ProductsContext.Provider
            value={{
                products,
                getProducts,
                countProducts,
                setCountProducts,
                search,
                setSearch,
                searchingProducts,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};
export default ProductsState;
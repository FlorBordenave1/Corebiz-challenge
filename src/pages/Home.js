import { useContext, useEffect } from "react"

//Components
import ArticleGallery from "../components/SliderContainer/SliderContainer"
import Banner from "../components/Banner/Banner"
import Layout from "../components/Layout/Layout"
import NewsLetter from "../components/NewsLetter/NewsLetter"
import SliderContainer from "../components/SliderContainer/SliderContainer"

//context
import PorductsContext from "../context/ProductsContext"



export default function Home() {

    const productsContext = useContext(PorductsContext)
    const { products, getProducts } = productsContext


    useEffect(() => {
        getProducts()
    }, [])

    return (
        <Layout>
            <Banner />
            <SliderContainer products={products} />
            {/*  
            <ArticleGallery
                products={products}
            />
            <NewsLetter /> */}
        </Layout>
    )
}
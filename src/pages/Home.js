import { useContext, useEffect } from "react"

//Components
import ArticleGallery from "../components/ArticleGallery/ArticleGallery"
import Layout from "../components/Layout/Layout"
import NewsLetter from "../components/NewsLetter/NewsLetter"
import PagePresentation from "../components/PagePresentation/PagePresentation"
import Slider from "../components/Slider/Slider"

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
            {/* <PagePresentation />
            <Slider />
            <ArticleGallery
                products={products}
            />
            <NewsLetter /> */}
        </Layout>
    )
}
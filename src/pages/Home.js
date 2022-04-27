import ArticleGallery from "../components/ArticleGallery/ArticleGallery"
import Layout from "../components/Layout/Layout"
import NewsLetter from "../components/NewsLetter/NewsLetter"
import Slider from "../components/Slider/Slider"

export default function Home() {
    return (
        <Layout>
            <Slider />
            <ArticleGallery />
            <NewsLetter />
        </Layout>
    )
}
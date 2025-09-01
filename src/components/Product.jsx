import ProductCard from '../layouts/ProductCard'
import img1 from '../assets/Turmeric.png'
import img2 from '../assets/Cinnamon.png'
import img3 from '../assets/Ginger.png'
import img4 from '../assets/Star anise.png'
import img5 from '../assets/Black Pepper.png'
import img6 from '../assets/Clove.png'

const Product = () => {
    return (
        <div className='min-h-screen px-5 md:px-14 py-8'>
            <h1 className='text-center text-4xl font-black py-5'>Our Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-2'>
                <ProductCard
                    img={img1}
                    title="Turmeric"
                    description="Boost your meals with the golden spice known for its earthy flavor and health benefits."
                />
                <ProductCard
                    img={img2}
                    title="Cinnamon"
                    description="Add warmth and sweetness to any dish with our aromatic cinnamon sticks."
                />
                <ProductCard
                    img={img3}
                    title="Ginger"
                    description="Fresh, zesty ginger that enhances flavor and adds a spicy kick to recipes."
                />
                <ProductCard
                    img={img4}
                    title="Star Anise"
                    description="Exotic star anise with a distinct licorice flavor, perfect for desserts and teas."
                />
                <ProductCard
                    img={img5}
                    title="Black Pepper"
                    description="Premium black pepper to elevate taste, aroma, and spice in all your dishes."
                />
                <ProductCard
                    img={img6}
                    title="Clove"
                    description="Fragrant cloves that bring depth, warmth, and flavor to both sweet and savory recipes."
                />
            </div>
        </div>
    )
}

export default Product

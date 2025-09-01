import React from 'react'
import bannerImg from '../assets/Banner.png'

const Banner = () => {
    return (
        <div
            id="banner" 
            className='relative min-h-screen flex justify-center items-center bg-cover bg-center text-white text-center'
            style={{ backgroundImage: `url(${bannerImg})` }}
        >
            {/* Dark overlay for better readability */}
            <div className='absolute inset-0 bg-black/60'></div>

            {/* Banner content */}
            <div className='relative z-10 w-full md:w-2/4 bg-black/50 p-5 mx-5 space-y-5 rounded-md'>
                <h1 className='text-4xl font-bold'>Spicy Picy</h1>

                <p className='text-sm font-light'>
                    Explore the rich flavors of our handpicked spices, crafted to bring warmth, aroma, and taste to every meal.
                </p>

                {/* Scroll to Products section */}
                <button
                    onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                    className='bg-orange-500 px-2 py-1 rounded-lg hover:bg-white hover:text-black transition duration-300 ease-in-out cursor-pointer'
                >
                    Order Now
                </button>
            </div>
        </div>
    )
}

export default Banner

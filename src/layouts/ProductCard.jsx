import React from 'react'

const ProductCard = ({ img, title, description }) => {
    return (
        <div className='bg-gray-100 p-3.5 rounded-lg text-center space-y-2
        group hover:cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition
        duration-300 ease-in-out relative'>
            {/* Product image */}
            <img src={img} alt={title} className='rounded-2xl' />

            {/* Product title */}
            <h3 className='font-semibold text-lg'>{title}</h3>

            {/* Product description and hover button */}
            <div className='flex items-center justify-center relative'>
                <p className='text-sm font-light group-hover:opacity-0
                transition-opacity duration-300'>
                    {description}
                </p>
                <button className='opacity-0 group-hover:opacity-100
                bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold
                transition-opacity duration-300 absolute'>Order Now</button>
            </div>
        </div>
    )
}

export default ProductCard

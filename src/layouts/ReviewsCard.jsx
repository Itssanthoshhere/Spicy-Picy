import React from 'react'

const ReviewsCard = ({ img, title, review }) => {
    return (
        <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-2xl
        transition-transform transform hover:scale-95 duration-300 flex flex-col items-center text-center'>

            <img src={img} alt={title} className='rounded-2xl' />

            <h3 className='text-lg font-semibold mt-3 text-center'>{title}</h3>

            <p className='font-light text-sm mt-5'>
                {review}
            </p>
        </div>
    )
}

export default ReviewsCard

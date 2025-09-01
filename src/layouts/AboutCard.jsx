import React from 'react'

const AboutCard = ({ icon, title }) => {
    return (
        <div className='flex flex-col items-center gap-2 text-center shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5
        rounded-2xl hover:bg-black hover:text-orange-400 transition-transform
        transform hover:-translate-y-2 hover:scale-105 duration-300'>
            {/* Icon passed as prop */}
            <span>{icon}</span>

            {/* Card title */}
            <h3 className='text-lg font-semibold'>{title}</h3>

            {/* Card description */}
            <p className='text-sm font-light'>
                We craft high-quality spices to enhance every meal. Our blends are carefully selected to deliver authentic flavors that bring warmth and depth to your cooking.
            </p>
        </div>
    )
}

export default AboutCard

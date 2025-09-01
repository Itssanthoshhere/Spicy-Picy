import React from 'react';
import video from '../assets/hero.mp4';
import img from '../assets/s.png';

const Hero = () => {
    // Scroll to Products section
    const scrollToProducts = () => {
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='relative min-h-screen' id='home'>

            {/* Background video (visible on md screens and above) */}
            <video
                className='hidden md:block absolute top-0 left-0 w-full h-full object-cover'
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={video} type='video/mp4' />
            </video>

            {/* Content wrapper */}
            <div className='min-h-screen relative z-10 flex flex-col md:flex-row
                items-center justify-between px-5 md:px-14 md:bg-black/60 bg-black/90 pt-10 md:pt-0'>

                {/* Left: Text content */}
                <div className='w-full md:w-1/2 flex flex-col gap-5 text-white items-center text-center
                md:items-start md:text-left'>
                    <h3 className='text-3xl font-semibold'>Spicy Picy</h3>
                    <h1 className='text-5xl font-bold'>Bring Flavor to Every Bite 🌶️</h1>
                    <p className='w-full lg:w-2/4'>
                        Discover the rich taste of authentic spices crafted to ignite your senses.
                        From fiery chili to aromatic turmeric, our blends are made to elevate your meals.
                    </p>
                    <p className='w-full lg:w-2/4'>
                        At Spicy Picy, we believe every dish tells a story.
                        Our handpicked spices add warmth, depth, and flavor that transforms everyday cooking into an unforgettable experience.
                    </p>

                    {/* Explore Now button linking to Products */}
                    <button
                        onClick={scrollToProducts}
                        className='w-3/4 md:w-1/4 py-1 bg-orange-500 text-lg
                        rounded-lg hover:bg-white hover:text-black transition duration-300 ease-in-out cursor-pointer'
                    >
                        Explore Now
                    </button>
                </div>

                {/* Right: Product image */}
                <div className='w-full md:w-1/2 flex justify-center mb-6 md:mb-0 rounded-full'>
                    <img src={img} alt="Spices" className='w-3/4 max-w-[300px] md:max-w-full' />
                </div>
            </div>
        </div>
    );
};

export default Hero;

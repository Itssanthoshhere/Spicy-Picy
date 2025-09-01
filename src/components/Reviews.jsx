import React from 'react'
import ReviewsCard from '../layouts/ReviewsCard'
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'

const reviewsData = [
    {
        img: img1,
        title: "Sara",
        reviews: [
            "The spices from Spicy Picy transformed my dishes! Rich flavor and absolutely fresh.",
            "Absolutely love the quality and aroma of their spices. Cooking has become so much fun!",
            "Every dish tastes amazing now! Spicy Picy’s spices are a must-have in every kitchen."
        ]
    },
    {
        img: img2,
        title: "David",
        reviews: [
            "High-quality and natural ingredients. Cooking has never been this enjoyable.",
            "The freshness and purity of the spices are unmatched. I recommend them to all my friends.",
            "I can taste the difference! These spices make every meal flavorful and aromatic."
        ]
    },
    {
        img: img3,
        title: "Kim",
        reviews: [
            "A wide variety of spices that really elevate the taste of every meal. Highly recommend!",
            "From sweet to spicy, they have it all. The quality is consistently excellent.",
            "I love experimenting with their spices. Every dish turns into a culinary delight!"
        ]
    }
]

const Reviews = () => {
    return (
        <div className='px-5 md:px-14'>
            <h1 className='text-center text-4xl font-bold py-5'>Reviews</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5'>
                {reviewsData.map((reviewee, index) => (
                    <ReviewsCard
                        key={index}
                        img={reviewee.img}
                        title={reviewee.title}
                        review={reviewee.reviews[Math.floor(Math.random() * reviewee.reviews.length)]} // Random review
                    />
                ))}
            </div>
        </div>
    )
}

export default Reviews

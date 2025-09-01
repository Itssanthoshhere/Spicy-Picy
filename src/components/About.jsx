import React from 'react'
import AboutCard from '../layouts/AboutCard'
import { MdOutlineWorkspacePremium } from 'react-icons/md'
import { FaLeaf, FaBox } from 'react-icons/fa'

const About = () => {
    return (
        <div className='px-5 md:px-14 py-10'>
            <h1 className='text-center text-4xl font-bold py-5'>Why Choose Us?</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            mt-8 gap-8'>
                <AboutCard
                    icon={
                        <MdOutlineWorkspacePremium size={45} className='text-orange-500' />
                    }
                    title="Premium Quality"
                />
                <AboutCard
                    icon={
                        <FaLeaf size={45} className='text-orange-500' />
                    }
                    title="100% Pure & Natural"
                />
                <AboutCard
                    icon={
                        <FaBox size={45} className='text-orange-500' />
                    }
                    title="Wide Variety Of Spices"
                />
            </div>
        </div>
    )
}

export default About
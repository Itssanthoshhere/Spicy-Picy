import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { AiOutlineClose, AiOutlineMenuUnfold } from 'react-icons/ai'

const Navbar = () => {
    // State to track whether the mobile menu is open or closed
    const [menu, setMenu] = useState(false);

    // Function to toggle menu state (open/close)
    const handleChange = () => {
        setMenu(!menu);
    };

    return (
        <>
            {/* Main Navbar container */}
            <div className='flex justify-between px-5 py-5 lg:px-14
            md:px-10 bg-black text-white'>

                {/* Logo / Brand Name */}
                <div>
                    <span className='text-xl font-bold'>Spicy Picy</span>
                </div>

                {/* Desktop Navigation (hidden on small screens, visible on lg and above) */}
                <nav className='hidden lg:flex items-center gap-8 px-20'>
                    <a href="/" className='hover:text-orange-500 transition duration-300 ease-linear'>Home</a>
                    <a href="/" className='hover:text-orange-500 transition duration-300 ease-linear'>About</a>
                    <a href="/" className='hover:text-orange-500 transition duration-300 ease-linear'>Products</a>
                    <a href="/" className='hover:text-orange-500 transition duration-300 ease-linear'>Contact</a>
                </nav>

                {/* Right section (Cart icon + Sign in button) - hidden on small screens */}
                <div className='hidden md:flex items-center gap-4'>
                    {/* Shopping cart icon */}
                    <FaShoppingCart size={20} />

                    {/* Sign in button */}
                    <button className='bg-orange-600 px-2 py-1 rounded-lg hover:bg-white
                    hover:text-black transition duration-300 ease-in-out cursor-pointer'>
                        Sign in
                    </button>
                </div>

                {/* Hamburger menu (only visible on mobile - md:hidden) */}
                <div className='md:hidden flex items-center'>
                    {menu ? (
                        // Close icon when menu is open
                        <AiOutlineClose size={25} onClick={handleChange} />
                    ) : (
                        // Hamburger icon when menu is closed
                        <AiOutlineMenuUnfold size={25} onClick={handleChange} />
                    )}
                </div>
            </div>

            {/* Mobile Menu (slides in/out based on state) */}
            <div className={`${menu ? 'translate-x-0' : "-translate-x-full"} 
                lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 
                font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit 
                transition-transform duration-300 z-50`}
            >
                <a href="/" className='hover:text-orange-500 transition duration-300 ease-linear'>Home</a>
                <a href="/" className='hover:text-orange-500 transition duration-300 ease-linear'>About</a>
                <a href="/" className='hover:text-orange-500 transition duration-300 ease-linear'>Products</a>
                <a href="/" className='hover:text-orange-500 transition duration-300 ease-linear'>Contact</a>
            </div>
        </>
    )
}

export default Navbar

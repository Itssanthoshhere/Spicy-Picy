import React, { useState, useEffect, useRef } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineClose, AiOutlineMenuUnfold } from 'react-icons/ai';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [navHeight, setNavHeight] = useState(0);
    const navRef = useRef(null);

    const handleChange = () => setMenu(!menu);

    // Scroll helper
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = navHeight;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
        setMenu(false); // Close mobile menu after click
    };

    // Get navbar height dynamically
    useEffect(() => {
        if (navRef.current) {
            setNavHeight(navRef.current.offsetHeight);
        }
        const handleResize = () => {
            if (navRef.current) setNavHeight(navRef.current.offsetHeight);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {/* Navbar */}
            <div
                ref={navRef}
                className="fixed top-0 left-0 w-full flex justify-between px-5 py-5 lg:px-14 md:px-10 bg-black text-white z-50 shadow-md"
            >
                {/* Logo */}
                <div>
                    <span
                        className="text-xl font-bold cursor-pointer"
                        onClick={() => scrollToSection('home')}
                    >
                        Spicy Picy
                    </span>
                </div>

                {/* Desktop menu */}
                <nav className="hidden lg:flex items-center gap-8 px-20">
                    {['home', 'about', 'products', 'reviews', 'contact'].map((section) => (
                        <span
                            key={section}
                            className="hover:text-orange-500 cursor-pointer"
                            onClick={() => scrollToSection(section)}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </span>
                    ))}
                </nav>

                {/* Right buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <FaShoppingCart size={20} />
                    <button className="bg-orange-600 px-2 py-1 rounded-lg hover:bg-white hover:text-black transition duration-300 ease-in-out cursor-pointer">
                        Sign in
                    </button>
                </div>

                {/* Mobile menu icon */}
                <div className="md:hidden flex items-center">
                    {menu ? (
                        <AiOutlineClose size={25} onClick={handleChange} />
                    ) : (
                        <AiOutlineMenuUnfold size={25} onClick={handleChange} />
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed ${menu ? 'top-[0]' : '-top-full'} left-0 w-full h-screen flex flex-col bg-black text-white font-semibold text-2xl text-center pt-[calc(var(--nav-height)+10px)] gap-8 transition-all duration-300 z-40`}
                style={{ paddingTop: `${navHeight + 10}px` }}
            >
                {['home', 'about', 'products', 'reviews', 'contact'].map((section) => (
                    <span
                        key={section}
                        className="hover:text-orange-500 cursor-pointer"
                        onClick={() => scrollToSection(section)}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </span>
                ))}
            </div>

            {/* Spacer to prevent content hiding behind fixed navbar */}
            <div style={{ height: `${navHeight}px` }} />
        </>
    );
};

export default Navbar;

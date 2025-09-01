import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-black text-white rounded-t-3xl mt-8 md:mt-0">
            <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">

                {/* Brand info */}
                <div className="w-full md:w-1/4">
                    <h1 className="font-semibold text-xl pb-4">Spicy Picy</h1>
                    <p className="text-sm">
                        Bringing authentic spices from around the world to your kitchen, crafted for flavor and freshness.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
                    <nav className="flex flex-col gap-2">
                        <a href="#home" className="hover:text-orange-400 transition-all cursor-pointer">Home</a>
                        <a href="#about" className="hover:text-orange-400 transition-all cursor-pointer">About</a>
                        <a href="#products" className="hover:text-orange-400 transition-all cursor-pointer">Products</a>
                        <a href="#reviews" className="hover:text-orange-400 transition-all cursor-pointer">Reviews</a>
                        <a href="#contact" className="hover:text-orange-400 transition-all cursor-pointer">Contact</a>
                    </nav>
                </div>

                {/* Specialties */}
                <div>
                    <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Our Specialties</h1>
                    <nav className="flex flex-col gap-2">
                        <a href="#premium" className="hover:text-orange-400 transition-all cursor-pointer">Premium Quality</a>
                        <a href="#exotic" className="hover:text-orange-400 transition-all cursor-pointer">Exotic Flavors</a>
                    </nav>
                </div>

                {/* Contact Info */}
                <div>
                    <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
                    <nav className="flex flex-col gap-2">
                        <a href="/" className="hover:text-orange-400 transition-all cursor-pointer">support-spicypicy@gmail.com</a>
                        <a href="/" className="hover:text-orange-400 transition-all cursor-pointer">+91 987 654 321</a>
                        <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-all cursor-pointer">Instagram</a>
                        <a href="/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-all cursor-pointer">Facebook</a>
                    </nav>
                </div>
            </div>

            {/* Footer bottom */}
            <div>
                <p className="text-center py-4">
                    &copy; Developed by <span className="text-orange-600">Santhosh VS @Itssanthoshhere</span> | All rights reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer

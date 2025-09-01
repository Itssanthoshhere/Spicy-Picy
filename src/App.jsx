import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Hero from './components/Hero';
import About from './components/About';
import Product from './components/Product';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-sans App">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="pt-[70px] md:pt-[80px]">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="pt-[70px] md:pt-[80px]">
        <About />
      </section>

      {/* Products Section */}
      <section id="products" className="pt-[70px] md:pt-[80px]">
        <Product />
      </section>

      {/* Home / Banner Section */}
      <section id="home" className="pt-[70px] md:pt-[80px]">
        <Banner />
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="pt-[70px] md:pt-[80px]">
        <Reviews />
      </section>

      {/* Contact / Footer Section */}
      <section id="contact" className="pt-[70px] md:pt-[80px]">
        <Footer />
      </section>
    </div>
  );
};

export default App;

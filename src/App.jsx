// import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Product from './components/Product';
// import Banner from './components/Banner';
// import Reviews from './components/Reviews';
// import Footer from './components/Footer';

// const App = () => {
//   return (
//     <div className="font-sans App">
//       {/* Navbar */}
//       <Navbar />

//       {/* Home / Hero Section */}
//       <section id="home">
//         <Hero />
//       </section>

//       {/* About Section */}
//       <section id="about" className="pt-[15px] md:pt-[25px]">
//         <About />
//       </section>

//       {/* Products Section */}
//       <section id="products" className="pt-[5px] md:pt-[px]">
//         <Product />
//       </section>

//       {/* Banner Section */}
//       <section id="banner" className="pt-[15px] md:pt-[25px]">
//         <Banner />
//       </section>

//       {/* Reviews Section */}
//       <section id="reviews" className="pt-[15px] md:pt-[25px]">
//         <Reviews />
//       </section>

//       {/* Contact / Footer Section */}
//       <section id="contact" className="pt-[15px] md:pt-[25px]">
//         <Footer />
//       </section>
//     </div>
//   );
// };

// export default App;




import React, { useRef, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Product from './components/Product';
import Banner from './components/Banner';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

const App = () => {
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (navRef.current) setNavHeight(navRef.current.offsetHeight);

    const handleResize = () => {
      if (navRef.current) setNavHeight(navRef.current.offsetHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="font-sans App">
      {/* Navbar */}
      <div ref={navRef}>
        <Navbar />
      </div>

      {/* Home / Hero Section */}
      <section id="home" style={{ paddingTop: navHeight }}>
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" style={{ paddingTop: '20px' }}>
        <About />
      </section>

      {/* Products Section */}
      <section id="products" style={{ paddingTop: '20px' }}>
        <Product />
      </section>

      {/* Banner Section */}
      <section id="banner" style={{ paddingTop: '20px' }}>
        <Banner />
      </section>

      {/* Reviews Section */}
      <section id="reviews" style={{ paddingTop: '20px' }}>
        <Reviews />
      </section>

      {/* Contact / Footer Section */}
      <section id="contact" style={{ paddingTop: '20px' }}>
        <Footer />
      </section>
    </div>
  );
};

export default App;

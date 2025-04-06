import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import Products from '../components/Products';
import Features from '../components/Features';
import AppSection from '../components/AppSection';
import News from '../components/News';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <Products />
      <Features />
      <AppSection />
      <News />
      <Footer />
    </div>
  );
}

export default Home;
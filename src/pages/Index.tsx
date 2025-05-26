
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import VideoShowcase from '../components/VideoShowcase';
import BookingSection from '../components/BookingSection';
import CustomerReviews from '../components/CustomerReviews';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      <Hero />
      <About />
      <VideoShowcase />
      <Gallery />
      <BookingSection />
         <CustomerReviews />
      <Footer />
    </div>
  );
};

export default Index;

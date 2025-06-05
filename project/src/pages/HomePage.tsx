// project/src/pages/HomePage.tsx
import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import FeaturedTip from '../components/home/FeaturedTip';
// import SportCategories from '../components/home/SportCategories'; // Already removed in previous steps
import TipsList from '../components/home/TipsList';
import RecentResults from '../components/home/RecentResults';
import Testimonials from '../components/home/Testimonials';
// import PricingSection from '../components/home/PricingSection'; // Removed
import FAQ from '../components/home/FAQ';
import CTASection from '../components/home/CTASection';

const HomePage = () => {
  useEffect(() => {
    document.title = "Mr. Banks Tips - Expert Sports Betting Advice";
  }, []);

  return (
    <>
      <Hero />
      <FeaturedTip />
      {/* <SportCategories /> Removed this component */}
      <TipsList />
      <RecentResults />
      <Testimonials />
      {/* <PricingSection /> Removed this component */}
      <FAQ />
      <CTASection />
    </>
  );
};

export default HomePage;

import React from 'react';
import AboutUs from '../components/about/AboutUs';
import Features from '../components/Features';
import Hero from '../components/network/Hero';
import Navbar2 from '../components/navbar/Navbar2';
import Steps from '../components/devForm/Steps';

const Main = () => {
  return (
    <div>
      <Navbar2 />
      <Hero />
      <Steps />
      <Features />
      <AboutUs />
    </div>
  );
};

export default Main;

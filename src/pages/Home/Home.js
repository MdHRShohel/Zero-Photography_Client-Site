import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Gallery from './Gallery';
import ServicesHome from './ServicesHome';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <ServicesHome></ServicesHome>
        <Contact></Contact>
        <Gallery></Gallery>
      </div>
    );
};

export default Home;
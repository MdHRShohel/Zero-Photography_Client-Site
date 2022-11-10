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
        <Gallery></Gallery>
        <Contact></Contact>
      </div>
    );
};

export default Home;
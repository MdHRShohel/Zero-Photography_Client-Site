import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Gallery from './Gallery';
import ServicesHome from './ServicesHome';
import useTitle from "../../components/UseTitle";

const Home = () => {
  useTitle("ZP | Home");
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
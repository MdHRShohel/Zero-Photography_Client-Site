import React from 'react';

const Banner = () => {
    return (
      <div className="hero bg-base-100 mt-12 mb-12 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            className="rounded-lg shadow-2xl md:max-w-xl lg:max-w-2xl"
            src="https://i.pinimg.com/736x/b9/f2/d4/b9f2d4ac3d1c353fb848508478e9e0ba.jpg"
            alt=""
          />
          <div className="text-center">
            <h4 className="mt-12">EVENT PHOTOGRAPHER</h4>
            <h1 className="md:text-9xl text-6xl font-bold title">
              SOHAN AHMED
            </h1>
            <h5 className="text-2xl mt-2 md:mt-0">
              “Today’s special moments. Tomorrow’s priceless treasures.”
            </h5>
          </div>
        </div>
      </div>
    );
};

export default Banner;
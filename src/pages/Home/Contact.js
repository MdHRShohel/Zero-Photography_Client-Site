import React from 'react';

const Contact = () => {
    return (
      <div className="hero  bg-base-100 mt-12 mb-12">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse">
          <div className="text-center">
            <h1 className="md:text-6xl text-4xl font-bold title mr-2">
              INTERESTED IN MY SERVICES?
            </h1>
            <button className="btn btn-outline btn-primary btn-lg mt-8">
              Contact Me
            </button>
          </div>
          <img
            src="https://websitedemos.net/photographer-04/wp-content/uploads/sites/507/2019/10/services-03-free-img.png"
            alt=""
            className=" hero-image rounded-lg shadow-2xl  md:max-w-2xl"
          />
        </div>
      </div>
    );
};

export default Contact;
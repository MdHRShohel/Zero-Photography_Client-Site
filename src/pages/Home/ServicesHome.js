import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServicesHome = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="flex mx-auto">
        <h1 className="md:text-6xl mx-auto text-4xl font-bold title">
          SERVICES
        </h1>
      </div>
      <div className="grid justify-center m-auto justify-items-center gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 container mx-auto ">
        {services.slice(0, 3).map((service) => (
          <div
            key={service._id}
            className="card w-auto mx-2 bg-base-100 shadow-xl border"
          >
            <figure>
              <img src={service.img} alt="" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{service.title}</h2>
              <p>{service.description.slice(0, 100)}...</p>
              <div className="card-actions flex items-center md:space-x-10">
                <p className="mt-8 text-xl">Price: ${service.price}</p>
                <button className="btn btn-outline mx-auto mt-8">
                  VIEW DETAILS
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex">
        <Link to="/services" className="btn btn-wide font-bold  text-lg mx-auto mt-12">VIEW ALL</Link>
      </div>
    </div>
  );
};

export default ServicesHome;

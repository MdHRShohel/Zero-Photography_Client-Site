import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServicesHome = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services-home")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <PhotoProvider>
        <div className="flex mx-auto">
          <h1 className="md:text-6xl mx-auto text-4xl font-bold title">
            SERVICES
          </h1>
        </div>
        <div className="grid justify-center m-auto justify-items-center gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 container mx-auto ">
          {services.map((service) => (
            <div
              key={service._id}
              className="card w-auto mx-2 bg-base-100 shadow-xl border"
            >
              <figure>
                <PhotoView src={service.img}>
                  <img src={service.img} alt="" />
                </PhotoView>
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{service.title}</h2>
                <p>{service.description.slice(0, 100)}...</p>
                <div className="card-actions flex items-center md:space-x-10">
                  <p className="mt-8 text-xl">Price: ${service.price}</p>
                  <Link
                    to={`/services/${service._id}`}
                    className="btn btn-outline mx-auto mt-8"
                  >
                    VIEW DETAILS
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex">
          <Link
            to="/services"
            className="btn btn-secondary btn-wide font-bold  text-lg mx-auto mt-12"
          >
            VIEW ALL
          </Link>
        </div>
      </PhotoProvider>
    </div>
  );
};

export default ServicesHome;

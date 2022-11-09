import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const ServiceDetails = () => {
  const { title, img, price, description } = useLoaderData();

  const { user } = useContext(AuthContext);

  const AddUser = () => {};

  return (
    <div>
      <section className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <img src={img} alt="" className=" rounded-lg max-h-fit shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6 text-2xl text-justify">{description}</p>
            <p className="text-3xl font-bold">Price: ${price}</p>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default ServiceDetails;

import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const ServiceDetails = () => {
    const {_id, title, img, price, description } = useLoaderData();
    const { user } = useContext(AuthContext);
    const serviceId = _id;
    //console.log(serviceId);

  const AddReview = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const review = event.target.review.value;
    const reviewData = {serviceId, name, email, review};
    
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if(data.acknowledged){
          alert("Review Added");
          event.target.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <section className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <img src={img} alt="" className=" rounded-lg max-h-fit shadow-2xl" />
          <div>
            <h1 className="text-5xl mb-8 font-bold">{title}</h1>
            <p className="text-3xl font-bold">Price: ${price}</p>
            <p className="py-6 text-2xl text-justify">{description}</p>
          </div>
        </div>
      </section>
      <section className="md:w-1/2 mx-auto">
        <form onSubmit={AddReview}>
          <div className="w-full p-8 my-4 md:px-12  mx-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-3xl">Leave a Review</h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
              <input
                name="name"
                type="text"
                placeholder="Name*"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                required
              />

              <input
                defaultValue={user?.email}
                name="email"
                type="email"
                readOnly
                placeholder="Email*"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="my-4">
              <textarea
                name="review"
                placeholder="Review*"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                required
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                type="submit"
                className="btn btn-secondary uppercase text-sm font-bold tracking-wide p-3 rounded-lg w-full"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ServiceDetails;

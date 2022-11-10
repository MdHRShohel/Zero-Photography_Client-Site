import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const ServiceDetails = () => {
    const {_id, title, img, price, description } = useLoaderData();
    const { user } = useContext(AuthContext);
    
    const [reviews, setReviews] = useState([]);
    //console.log(serviceId);

    //review add handler
  const AddReview = (event) => {
    event.preventDefault();
    const serviceId = _id;
    const serviceTitle = title;
    const userImg = user.photoURL;
    const name = event.target.name.value;
    const email = event.target.email.value;
    const review = event.target.review.value;
    const reviewData = {serviceId, serviceTitle,userImg, name, email, review};
    
    fetch("http://localhost:5000/add-review", {
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
          toast.success("Review Added");
          event.target.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

    useEffect(() => {
      fetch("http://localhost:5000/reviews")
        .then((res) => res.json())
        .then((data) => {
          const showReview = data.filter(
            (show) => show.serviceId === _id
          );            
         setReviews(showReview);
        });
    }, [_id]);
    //console.log(reviews);
  return (
    <div>
      <section className="hero lg:min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <img src={img} alt="" className=" rounded-lg  shadow-2xl" />
          <div>
            <h1 className="text-5xl mb-8 font-bold">{title}</h1>
            <p className="text-3xl font-bold">Price: ${price}</p>
            <p className="py-6 text-2xl text-justify">{description}</p>
          </div>
        </div>
      </section>
      <section className="md:w-1/2 mx-auto">
        <h1 className="text-3xl my-6 font-semibold">
          Total {reviews.length} Reviews !!
        </h1>

        {reviews.map((review) => (
          <div key={review._id}>
            <div>
              <div className="flex items-center space-x-4">
                <div className="avatar">
                  <div className="rounded-lg w-12 h-12 my-2">
                    <img src={review.userImg} alt="" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{review.name}</div>
                  <h4 className="text-sm opacity-50">{review.email}</h4>
                </div>
                <p className="text-lg mx-4">{review.review}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
      <div>
        {user?.email ? (
          <form onSubmit={AddReview}>
            <h1 className="font-bold text-center uppercase text-3xl mt-12">
              Leave a Review
            </h1>
            <div className="w-2/3 mx-auto p-8 md:px-12 rounded-2xl shadow-2xl">
              <div></div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  name="name"
                  type="text"
                  placeholder="Name*"
                  className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  required
                />

                <input
                  defaultValue={user?.email}
                  name="email"
                  type="email"
                  readOnly
                  placeholder="Email*"
                  className="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
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
        ) : (
          <div className="text-center">
            <div className="my-4">
              <textarea
                name="review"
                defaultValue="Sign in to Leave a Review"
                className="w-1/2 h-20 bg-gray-100 text-gray-900 text-2xl font-bold mt-2 p-3 rounded-lg 
                textarea
                textarea-primary
                focus:outline-none focus:shadow-outline"
                required
                readOnly
              ></textarea>
            </div>
            <Link to="/signin" className="btn btn-large text-2xl font-bold">
              Sign in
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;

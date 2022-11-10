import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";

const Update = () => {
  const storedReview = useLoaderData();
  
  const [reviewNew, setReviewNew] = useState(storedReview);
  //console.log(reviewNew);
  const handleUpdate = (event) => {
    event.preventDefault();
    //console.log(review);
    fetch(`http://localhost:5000/reviews/${storedReview._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewNew),
    })
      .then((res) => res.json())
      .then((data) => {
         if (data.acknowledged) {
           toast.success("Your Review Updated Successfully!!!");
            event.target.reset();
         }
      });
  };
  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const updateReview = { ...reviewNew };
    updateReview[field] = value;
    setReviewNew(updateReview);
  };

  return (
    <div>

        <div className="modal-box">
          <h3 className="font-bold uppercase text-lg text-center">
            Update Your Review for {storedReview.serviceTitle}
          </h3>
          <form onSubmit={handleUpdate}>
            <input
              onChange={handleInputChange}
              type="text"
              name="name"
              defaultValue={storedReview.name}
              className="input my-4 input-bordered mx-auto input-success w-full"
            />
            <input
              onChange={handleInputChange}
              type="text"
              name="review"
              defaultValue={storedReview.review}
              className="input input-bordered input-success w-full"
            />

            <div className="modal-action">
              <button className="btn btn-submit">Update</button>
              <Link to="/my-reviews" className="btn">
                Go Back to My Reviews
              </Link>
            </div>
          </form>
        </div>
      </div>
  );
};

export default Update;

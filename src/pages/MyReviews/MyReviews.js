import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import AllReviewsRow from "./AllReviewsRow";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  //console.log(user);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const showReview = data.filter((show) => show.email === user?.email);
        setReviews(showReview);
      });
  }, [user?.email]);
  console.log(reviews);

  return (
    <div>
      <div>
        <h2 className="text-center text-3xl font-bold">
          Hello {user?.displayName} !! <br /> Here is Your All Reviews that You
          added.
        </h2>
      </div>
      <div className="overflow-x-auto w-full my-10">
        <table className="table container mx-auto w-full">
          <thead>
            <tr>
              <th>Reviewer Details</th>
              <th>Service Name</th>
              <th>Review Description</th>
              <th>Delete/Modify</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <AllReviewsRow key={review._id} review={review} />
            ))}
          </tbody>
        </table>
      </div>

      {/*
      {reviews.map((review) => (
        <AllReviews key={review._id} review={review}></AllReviews>
      ))}
       <div
          key={review._id}
          className="flex flex-col justify-center items-center"
        >
          <div className="flex flex-col justify-center items-center">
            <img
              src={review.userImg}
              alt=""
              className="rounded-full w-20 h-20"
            />
            <h2 className="text-2xl font-bold">{review.name}</h2>
            <h3 className="text-xl font-bold">{review.email}</h3>
            <p className="text-xl font-bold">{review.review}</p>
          </div>
        </div>*/}
    </div>
  );
};

export default MyReviews;

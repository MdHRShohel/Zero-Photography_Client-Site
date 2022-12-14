import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import useTitle from "../../components/UseTitle";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import AllReviewsRow from "./AllReviewsRow";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  //console.log(user);
  useTitle("ZP | My Reviews");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
        fetch(`https://zero-photography-server.vercel.app/reviews?email=${user?.email}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("zero-token")}`,
          },
        })
          .then((res) => {
            if (res.status === 401 || res.status === 403) {
              return logOut();
            }
            return res.json();
          })
          .then((data) => {
            setReviews(data);
          });
    }, [user?.email, logOut])

  //console.log(reviews);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to delete this review"
    );
    if (proceed) {
      fetch(`https://zero-photography-server.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.su("Deleted Successfully");
            const remaining = reviews.filter((rev) => rev._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  return (
    <div>
      {reviews.length === 0 ? (
        <div className="flex h-screen justify-center items-center">
          <h1 className="text-6xl font-bold">No Reviews Were Added</h1>
        </div>
      ) : (
        <div className="min-h-screen">
          <div>
            <h2 className="text-center text-3xl font-bold">
              Hello {user?.displayName} !! <br /> Here is Your All Reviews that
              You added.
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
                  <AllReviewsRow
                    key={review._id}
                    review={review}
                    handleDelete={handleDelete}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReviews;

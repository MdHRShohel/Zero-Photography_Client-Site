import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";

const AllReviewsRow = ({ review, handleDelete }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={review.userImg} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{review.name}</div>
          </div>
        </div>
      </td>
      <td>{review.serviceTitle}</td>
      <td>{review.review}</td>
      <th>
        <Link to={`/update/${review._id}`}>
          <label
            htmlFor="my-modal-6"
            className="btn btn-outline  text-3xl btn-accent mx-2"
          >
            <BiEdit />
          </label>
        </Link>
        <button
          onClick={() => handleDelete(review._id)}
          className="btn btn-outline  text-3xl btn-accent"
        >
          <AiFillDelete />
        </button>
      </th>
    </tr>
  );
};

export default AllReviewsRow;

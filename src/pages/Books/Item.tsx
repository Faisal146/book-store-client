import React from "react";
import { FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Item = (item) => {
  console.log(item.item);

  const {
    author,

    category,

    createdAt,

    description,

    inStock,

    isDeleted,

    price,

    quantity,

    title,

    updatedAt,

    _id,
  } = item.item;

  return (
    <div className="md:w-1/3">
      <div className="card bg-base-100 shadow-xl p-3 m-2">
        <img src={""} alt={title} className="rounded-lg h-48 object-cover" />

        <div className="my-3">
          <div className="flex justify-between">
            <h3 className="text-gray-500 uppercase">{category}</h3>
            <h3 className="text-gray-800 uppercase flex items-center text-xl gap-2">
              {" "}
              <FaStar className="text-yellow-600"></FaStar>{" "}
              <span className="mb-2">4.9</span>{" "}
            </h3>
          </div>

          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between">
            <h2 className="text-2xl mt-3 font-bold text-gray-600">{price}</h2>
            <p className="btn btn-sm  mt-2">
              {" "}
              {inStock ? "available" : "stock Out"}{" "}
            </p>
          </div>

          <div className="card-actions justify-end">
            <Link
              to={`/book/${_id}`}
              className="btn btn-primary w-full btn-sm mt-4"
            >
              {" "}
              <FaEye></FaEye> See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

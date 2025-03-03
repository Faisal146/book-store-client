import { FaEye, FaStar } from "react-icons/fa";
import defaultImg from "../../assets/default_book.jpeg";
import { Link } from "react-router-dom";
import { TProduct } from "../../types";

const Item = (item: { item: TProduct }) => {
  const {
    category,

    inStock,

    price,

    title,
    img,

    _id,
  } = item.item;

  return (
    <div className="md:w-1/3">
      <div className="card bg-base-100 shadow-xl p-3 m-2">
        <img
          src={img ? img : defaultImg}
          alt={title}
          className="rounded-lg h-48 object-cover"
        />

        <div className="my-3">
          <div className="flex justify-between">
            <h3 className="text-gray-500 uppercase">{category}</h3>
            <h3 className="text-gray-800 uppercase flex items-center text-xl gap-2">
              {" "}
              <FaStar className="text-yellow-600"></FaStar> <span>4.9</span>{" "}
            </h3>
          </div>

          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between">
            <h2 className="text-2xl mt-3 font-bold text-gray-600">
              {price} Tk.
            </h2>
            <p className="btn btn-sm  mt-2">
              {" "}
              {inStock ? "available" : "stock Out"}{" "}
            </p>
          </div>

          <div className="card-actions flex-row flex-nowrap">
            <Link
              to={`/book/${_id}`}
              className="btn btn-info flex-1  btn-sm mt-4"
            >
              {" "}
              <FaEye></FaEye> Details
            </Link>
            {/* <Link to={`/book/${_id}`} className="btn btn-primary  btn-sm mt-4">
              {" "}
              <FaCartPlus></FaCartPlus>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

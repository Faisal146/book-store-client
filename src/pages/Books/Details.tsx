import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { useGetSigleBookQuery } from "../../redux/features/api/products";
import { FaCartArrowDown, FaCartPlus, FaMinus, FaPlus } from "react-icons/fa6";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import {
  useAddToCartMutation,
  useGetSingleUserEmailQuery,
  useRemoveFromCartMutation,
} from "../../redux/features/api/users";
import { useState } from "react";
import Swal from "sweetalert2";
import defaultImg from "../../assets/default_book.jpeg";

const Details = () => {
  const { id } = useParams();
  const { data } = useGetSigleBookQuery(id);
  const userInfo = useAppSelector(selectCurrentUser);

  const { data: userData } = useGetSingleUserEmailQuery(userInfo?.email);

  const book = data?.data;

  let incart = false;

  // check if item is in cart or not

  userData?.data?.cart.map((item) => {
    if (item.item._id === book?._id) {
      incart = true;
    }
  });

  const [count, setCount] = useState(1);
  // Function to increment the count
  const increment = () => {
    if (count === 10) {
      return;
    } else {
      setCount(count + 1);
    }
  };

  // Function to decrement the count
  const decrement = () => {
    if (count === 1) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  const [addToCart] = useAddToCartMutation(undefined);
  const [removeFromCart] = useRemoveFromCartMutation(undefined);

  const handleAddToCart = async () => {
    if (incart) {
      Swal.fire({
        icon: "error",
        title: "Already in cart",
      });
    } else {
      const data = {
        item: book._id,
        quantity: count,
      };
      const res = await addToCart(data);
      if (res.error) {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Added to cart",
          timer: 1300,
        });
      }
    }
  };
  const handleRemoveFromCart = async () => {
    if (!incart) {
      Swal.fire({
        icon: "error",
        title: "Item not found",
      });
    } else {
      const cartdata = {
        item: book._id,
      };

      const res = await removeFromCart(cartdata);
      if (res.error) {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Removed from cart",
          timer: 1300,
        });
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto my-12">
      <div className="md:flex block">
        <div
          className="left md:w-1/2 w-full md:h-auto h-96 rounded"
          style={{
            background: `url(${book?.img ? book?.img : defaultImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="right md:w-1/2 w-full pl-5 md:pl-10 ">
          <h1 className="text-3xl my-3 pb-3 text-center md:text-left">
            {book?.title}
          </h1>
          <p className="text-xl my-3 text-center md:text-left">
            By: {book?.author}
          </p>
          <h1 className="text-lg my-3 text-center md:text-left">
            {book?.description}
          </h1>
          <h1 className="text-2xl my-3 text-center md:text-left">
            <span className="text-gray-500  text-xl">category : </span>
            <span className=" font-bold"> {book?.category}</span>
          </h1>

          <h1 className="text-3xl my-3 mt-3 font-bold text-center md:text-left">
            {book?.price} TK.
            <span className=" font-bold"> </span>
          </h1>
          <h1
            className={` my-3 text-center shadow btn btn-sm md:text-left ${
              book?.inStock ? "btn-soft" : "btn-error"
            }`}
          >
            {book?.inStock ? "Available" : "Unavailable"}
          </h1>

          <h1 className="text-2xl my-3 text-center md:text-left flex md:justify-start justify-center  items-center">
            <span className="text-gray-500 w-40 block text-xl">Rating :</span>
            <span className=" font-bold flex items-center gap-4">
              <p>4.8</p> <FaStar className="text-yellow-500"></FaStar>
            </span>
          </h1>

          <div className="mt-6 flex items-center gap-3">
            <div className="join">
              <button className="btn btn-lg join-item" onClick={increment}>
                <FaPlus />
              </button>
              <button className="btn btn-lg join-item">{count}</button>
              <button className="btn btn-lg join-item" onClick={decrement}>
                <FaMinus />
              </button>
            </div>

            {incart ? (
              <button
                onClick={handleRemoveFromCart}
                className="btn btn-error btn-lg px-12  "
              >
                {" "}
                <FaCartArrowDown></FaCartArrowDown> Remove from cart
              </button>
            ) : (
              <button
                onClick={handleAddToCart}
                className="btn btn-primary btn-lg px-12 "
              >
                {" "}
                <FaCartPlus></FaCartPlus> Add to cart
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="my-12 mx-8">
        <h1 className="md:w-80 w-full md:mx-auto text-3xl border-b-2 text-center  ">
          Author Detalis
        </h1>

        <h1 className="text-2xl text-center mt-4 mb-2">Name:</h1>
        <h1 className="text-2xl text-center ">{book?.author}</h1>
      </div>
      <div className="text-center mx-4">
        <Link to="/books" className="btn btn-accent md:w-96 w-full">
          <FaArrowLeft></FaArrowLeft> Back
        </Link>
      </div>
    </div>
  );
};

export default Details;

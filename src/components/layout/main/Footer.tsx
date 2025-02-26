import { Link } from "react-router-dom";
import logo from "../../../assets/moonLogo-Dark.svg";

const Footer = () => {
  return (
    <div className="bg-gray-800 pt-6 text-white">
      <div className="items md:flex block px-4  items-center max-w-6xl mx-auto">
        <div className="item flex-1 my-4 text-center  mr-3">
          <img src={logo} className="h-12 w-10 mx-auto mb-4" alt="" />
          <h1 className="text-3xl pb-2 title font-bold">Moonlight Book Shop</h1>
          <h1 className="text-gray-400 px-5">
            Find the suitable and affordable Paintings and Arts for your perfect
            Home
          </h1>
        </div>
        <div className="item underline flex-1 text-center md:border-l-2 md:border-r-2 pages">
          <ul className="flex flex-col">
            <Link to="/">Home</Link>
            <Link to="/all">Books</Link>
            <Link to="/list">Your Orders</Link>
            <Link to="/about">About</Link>
          </ul>
        </div>
        <div className="flex-1 underline text-center">
          <ul className="flex flex-col">
            <Link to="/profile">Profile</Link>
            <Link to="update-profile">Update Profile</Link>
            <li>
              <button className="btn btn-info btn-sm mt-3">Log Out </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center border-t-2 py-3 mt-6">
        <p>&copy; all rights reserved 2025.</p>
      </div>
    </div>
  );
};

export default Footer;

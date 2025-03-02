import { Link } from "react-router-dom";
import logo from "../../../assets/moonLogo-Dark.svg";
import { useAppDispatch } from "../../../redux/hook";
import { logout } from "../../../redux/features/auth/authSlice";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  const dispatch = useAppDispatch();
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
            <Link to="/books">Books</Link>

            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <a
              href="tel:01538391381"
              className="btn btn-info btn-sm mx-auto w-28 mt-3"
              style={{ textDecoration: "none" }}
            >
              <FaPhone /> 01538391381
            </a>
          </ul>
        </div>
        <div className="flex-1 underline text-center">
          <ul className="flex flex-col">
            <Link to="/cart">My Cart</Link>
            <Link to="/orders">My Orders</Link>
            <Link to="/profile">Profile</Link>
            <Link to="update-profile">Update Profile</Link>
            <li>
              <button
                onClick={() => dispatch(logout())}
                className="btn btn-info btn-sm mt-3"
              >
                Log Out{" "}
              </button>
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

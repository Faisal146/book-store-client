import { Link, NavLink } from "react-router-dom";
import moonlogo from "../../../assets/moonLogo.svg";
import {
  logout,
  selectCurrentUser,
} from "../../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { FaUser } from "react-icons/fa6";
import { useGetSingleUserEmailQuery } from "../../../redux/features/api/users";

const Navbar = () => {
  const userInfo = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const { data: userData } = useGetSingleUserEmailQuery(userInfo?.email);

  let subTotal = 0;

  userData?.data?.cart.map((item: any) => {
    // console.log(item.item.price * item.quantity);

    subTotal += item.item.price * item.quantity;
  });

  const navlinks = (
    <>
      {/* <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
           
          </ul>
        </details>
      </li> */}
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/books">Books</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="bg-base-200 shadow-sm w-full fixed z-50">
        <div className="navbar mx-auto max-w-6xl ">
          <div className="navbar-start md:w-1/2 w-auto">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navlinks}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl text ">
              <img src={moonlogo} alt="" className="h-10" />
              <span className="md:inline hidden">Moonlignt Book Shop</span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navlinks}</ul>
          </div>
          <div className="navbar-end">
            {userInfo ? (
              <>
                <div className="dropdown dropdown-end mr-3">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle"
                  >
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />{" "}
                      </svg>
                      <span className="badge badge-sm indicator-item bg-gray-300">
                        {userData?.data?.cart.length}
                      </span>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
                  >
                    <div className="card-body">
                      <span className="text-lg font-bold">
                        {userData?.data?.cart.length} Items
                      </span>
                      <span className="text-info">Subtotal: {subTotal}</span>
                      <div className="card-actions">
                        <Link
                          to="/cart"
                          className="btn btn-info mt-4 btn-block"
                        >
                          View cart
                        </Link>
                        <Link
                          to="/checkout"
                          className="btn btn-primary btn-block"
                        >
                          Check Out
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    {userData?.data?.profileImg ? (
                      <div
                        className="w-10 rounded-full border-2 border-gray-300"
                        style={{
                          background: `url(${userData?.data?.profileImg})`,
                          backgroundSize: "cover",
                        }}
                      ></div>
                    ) : (
                      <div className="w-10 rounded-full border-2 border-gray-300">
                        <FaUser className="text-4xl p-1 text-gray-400"></FaUser>
                      </div>
                    )}
                  </div>

                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <a className=""> {userData?.data?.name}</a>
                    </li>
                    <li>
                      <a className="">{userInfo.email}</a>
                    </li>
                    <li>
                      <Link to="/orders" className="">
                        My Orders
                      </Link>
                    </li>
                    <li>
                      <Link to="/profile" className="">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/update-profile" className="">
                        Update Profile
                      </Link>
                    </li>

                    <li>
                      <button
                        className="btn btn-sm btn-error mt-2"
                        onClick={() => dispatch(logout())}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-info">
                  Log in
                </Link>
                <Link to="/register" className="btn ml-2.5">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <div className=" mx-auto pt-16"></div>
    </div>
  );
};

export default Navbar;

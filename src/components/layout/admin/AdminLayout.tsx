import {
  FaArrowAltCircleLeft,
  FaBoxes,
  FaDashcube,
  FaTasks,
  FaUsers,
} from "react-icons/fa";
import logoDark from "../../../assets/moonLogo-Dark.svg";
import { NavLink, Outlet } from "react-router-dom";
import { useAppSelector } from "../../../redux/hook";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";

const AdminLayout = () => {
  const userInfo = useAppSelector(selectCurrentUser);

  // const navigate = useNavigate();
  const menuItems = (
    <>
      {" "}
      <li>
        <NavLink to="/admin/dashboard">
          <FaDashcube></FaDashcube>
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/admin/users">
          <FaUsers></FaUsers>
          Users
        </NavLink>
      </li>
      <li>
        <NavLink to="/admin/products">
          <FaBoxes></FaBoxes>
          Products
        </NavLink>
      </li>
      <li>
        <NavLink to="/admin/orders">
          <FaTasks></FaTasks>
          Orders
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          {/* <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label> */}

          <div className="navbar  shadow-sm bg-base-300">
            <div className="flex-none">
              <label
                htmlFor="my-drawer-2"
                className="btn btn-square btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-5 w-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1">
              <a className="btn btn-ghost text-xl">Admin : {userInfo?.email}</a>
            </div>
            <div className="flex-none">
              <button className="btn mr-4 btn-info">
                <FaArrowAltCircleLeft /> Log Out
              </button>
            </div>
          </div>
          <div className="py-6 px-4">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu bg-blue-950 text-white min-h-full w-80 p-4">
            <div>
              <img src={logoDark} alt="" className="w-12 mx-auto mt-4" />
              <h1 className="text-center mb-5 pb-4 border-b-2 border-lime-100">
                Moolight Book Shop
              </h1>
            </div>
            <ul>
              {/* Sidebar content here */}

              {menuItems}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;

import { Link } from "react-router-dom";
import { useGetSingleUserEmailQuery } from "../../redux/features/api/users";
import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";

const Profile = () => {
  const userInfo = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const { data: userData } = useGetSingleUserEmailQuery(userInfo?.email);

  console.log(userData);

  return (
    <div>
      <div className="flex justify-center  bg-base-200">
        <div className="card w-96 my-16 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={userData?.data.profileImg} />
              </div>
            </div>
          </figure>
          <div className="card-body  items-center text-center">
            <h2 className="card-title">{userData?.data.name}</h2>
            <p>{userData?.data.email}</p>

            <div className="card-actions flex justify-center mt-8">
              <Link to="/cart" className="btn btn-info">
                My Cart
              </Link>
              <Link to="/orders" className="btn btn-info">
                My Orders
              </Link>
              <Link to="/update-profile" className="btn btn-info">
                Update Profile
              </Link>
              <button
                onClick={() => dispatch(logout())}
                className="btn btn-error"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

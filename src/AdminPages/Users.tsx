import { FaLock, FaUnlock } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import profileImg from "../assets/Default_pfp.jpg";

import Swal from "sweetalert2";
import {
  useBlockUserMutation,
  useGetUsersQuery,
  useUnblockUserMutation,
} from "../redux/features/api/users";
import { TUser } from "../types";
import { useAppSelector } from "../redux/hook";
import { selectCurrentUser } from "../redux/features/auth/authSlice";

const Users = () => {
  let id = 1;

  const { data } = useGetUsersQuery(undefined);

  const userInfo = useAppSelector(selectCurrentUser);

  const [block] = useBlockUserMutation(undefined);
  const [unBlock] = useUnblockUserMutation(undefined);

  const users = data?.data?.result;
  console.log(users);

  const handleBlock = async (id: string) => {
    try {
      // Show confirmation alert
      const result = await Swal.fire({
        icon: "warning",
        title: "Are you Sure?",
        text: `user will be Blocked`,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "Yes, Block",
      });

      // If the user confirms, proceed to delete the product
      if (result.isConfirmed) {
        const deleteResult = await block(id);
        console.log(deleteResult);
        if (deleteResult.error) {
          Swal.fire({
            icon: "error",
            title: "Oops... Something went wrong!",
            text: "There was an error while block the user.",
          });
        } else {
          Swal.fire({
            icon: "success",
            title: "Blocked Successfully",
            showConfirmButton: false,
            timer: 1300,
          });
        }
        // Show success message
      }
    } catch {
      Swal.fire({
        icon: "error",
        title: "Oops... Something went wrong!",
        text: "There was an error while deleting the product.",
      });
    }
  };

  const handleUnBlock = async (id: string) => {
    try {
      // Show confirmation alert
      const result = await Swal.fire({
        icon: "warning",
        title: "Are you Sure?",
        text: `user will be Unblocked`,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "Yes, Unblock",
      });

      // If the user confirms, proceed to delete the product
      if (result.isConfirmed) {
        const deleteResult = await unBlock(id);
        console.log(deleteResult);
        if (deleteResult.error) {
          Swal.fire({
            icon: "error",
            title: "Oops... Something went wrong!",
            text: "There was an error while unblock the user.",
          });
        } else {
          Swal.fire({
            icon: "success",
            title: "Unblocked Successfully",
            showConfirmButton: false,
            timer: 1300,
          });
        }
        // Show success message
      }
    } catch {
      Swal.fire({
        icon: "error",
        title: "Oops... Something went wrong!",
        text: "There was an error while deleting the product.",
      });
    }
  };

  return (
    <div>
      <div className=" pb-6">
        <h1 className="text-3xl">User Management</h1>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role </th>
              <th>Status</th>
              <th>Actons</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {users ? (
              users.map((item: TUser) => (
                <tr>
                  <th>{id++}</th>
                  <th>
                    <img
                      src={item?.profileImg ? item?.profileImg : profileImg}
                      alt=""
                      className="h-12 w-12 rounded-md"
                    />
                  </th>
                  <th>{item.name}</th>
                  <th>{item.email}</th>
                  <td>{item.role}</td>
                  <td>{item.isBlocked ? "Blocked" : "Active"}</td>
                  <td>
                    {" "}
                    <Link
                      to={`/admin/users/update/${item._id}`}
                      className="btn btn-info mr-2"
                    >
                      <FaEdit></FaEdit>
                    </Link>
                    {item.email === userInfo?.email ? (
                      ""
                    ) : item.isBlocked ? (
                      <button
                        onClick={() => handleUnBlock(item._id)}
                        className="btn btn-warning mr-2"
                      >
                        <FaUnlock></FaUnlock>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleBlock(item._id)}
                        className="btn btn-warning mr-2"
                      >
                        <FaLock></FaLock>
                      </button>
                    )}
                    {/* <button
                      onClick={() => handleDelete(item._id, item.title)}
                      className="btn btn-warning"
                    >
                      <FaLock></FaLock>
                    </button> */}
                  </td>
                </tr>
              ))
            ) : (
              <h1>loading...</h1>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

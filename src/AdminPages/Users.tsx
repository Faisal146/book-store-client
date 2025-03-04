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
import { useForm } from "react-hook-form";
import { useState } from "react";

const Users = () => {
  const [filter, setFilter] = useState(null);
  const [id, setId] = useState(0);

  const { data } = useGetUsersQuery(filter);

  const userInfo = useAppSelector(selectCurrentUser);

  const [block] = useBlockUserMutation(undefined);
  const [unBlock] = useUnblockUserMutation(undefined);
  const { register, handleSubmit } = useForm();

  const users = data?.data?.result;
  // console.log(users);

  const onPaginate = (data: any) => {
    //  console.log(data);
    setFilter(data);
    // setId((data.page - 1) * 9);
    setId((data.page - 1) * 9);
  };

  const onSearch = (data: any) => {
    //  console.log(data);
    setFilter(data);
  };

  const totalPage = Array.from(
    { length: data?.data?.meta.totalPage },
    (_, index) => index + 1
  );

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

      <form
        onSubmit={handleSubmit(onSearch)}
        className="flex gap-4 max-w-4xl mb-6"
      >
        <label className="input w-full bg-cyan-50">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>

          <input
            type="search"
            placeholder="Search"
            className="w-full"
            {...register("searchTerm")}
          />
        </label>
        <button type="submit" className="btn btn-info">
          Search
        </button>
      </form>

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
              users.map((item: TUser, index: number) => (
                <tr>
                  <th>{id + index + 1}</th>
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
                  <td className="flex">
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
              <h1 className="mt52 text-3xl text-center">loading...</h1>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center py-8">
        <div className="join">
          <form onChange={handleSubmit(onPaginate)}>
            {totalPage.map((item) => (
              <input
                className={`join-item btn ${
                  data?.data?.meta.page == item ? "btn-primary" : "btn-soft"
                }`}
                type="radio"
                value={item}
                {...register("page")}
                aria-label={String(item)}
              />
            ))}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Users;

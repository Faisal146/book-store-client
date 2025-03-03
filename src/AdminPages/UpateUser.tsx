import { FaAngleLeft } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "../redux/features/api/users";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UpateUser = () => {
  const { id } = useParams();

  const { data } = useGetSingleUserQuery(id);
  const [updateUser] = useUpdateUserMutation(undefined);

  const u = data?.data;

  console.log(u);

  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    console.log(data);

    const UpdatedData: any = {};
    Object.keys(data).forEach((item) => {
      console.log(item);
      if (data[item]) {
        UpdatedData[item] = data[item];
      }
    });

    console.log("updateddata =>", UpdatedData);

    const res = await updateUser({ id, UpdatedData });
    console.log(res);

    if (res.error) {
      Swal.fire({
        icon: "error",
        title: "something went worng",
      });
    } else {
      Swal.fire({
        icon: "success",
        timer: 1300,
        title: "Updated Successfully",
      });
    }
  };

  return (
    <div>
      <Link to="/admin/users" className="btn btn-soft shadow mb-3">
        <FaAngleLeft></FaAngleLeft>
        Back
      </Link>
      <div className="flex  gap-12 pb-6">
        <h1 className="text-3xl">Update User : {u?.name} </h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">User Name</legend>
          <input
            type="text"
            defaultValue={u?.name}
            className="input"
            placeholder="Type user name"
            {...register("name")}
          />
          <p className="validator-hint"></p>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Email Address</legend>
          <input
            type="text"
            defaultValue={u?.email}
            className="input"
            placeholder="Type email"
            {...register("email")}
          />
          <p className="validator-hint"></p>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">User Role</legend>
          <select
            defaultValue={u?.role}
            className="select"
            {...register("role")}
          >
            <option disabled={true}>Pick a role</option>
            <option>user</option>
            <option>admin</option>
          </select>
          <p className="validator-hint"></p>
        </fieldset>

        <button className="btn btn-info">Submit</button>
      </form>
    </div>
  );
};

export default UpateUser;

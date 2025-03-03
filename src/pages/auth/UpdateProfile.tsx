import { useForm, SubmitHandler } from "react-hook-form";
import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import {
  useGetSingleUserEmailQuery,
  useUpdateUserMutation,
} from "../../redux/features/api/users";
import Swal from "sweetalert2";

// Define the type for the form data
type FormData = {
  name: string;
  email: string;
};

const UpdateProfile = () => {
  const userInfo = useAppSelector(selectCurrentUser);

  const { data } = useGetSingleUserEmailQuery(userInfo?.email);
  const [updateUser] = useUpdateUserMutation(undefined);

  const u = data?.data;
  console.log(u);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data: any) => {
    console.log("Profile Updated:", data);

    const UpdatedData: any = {};
    Object.keys(data).forEach((item) => {
      console.log(item);
      if (data[item]) {
        UpdatedData[item] = data[item];
      }
    });

    const res = await updateUser({ id: u._id, UpdatedData });
    // console.log(res);

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Update Profile</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              defaultValue={u?.name}
              {...register("name", { required: "Name is required" })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              defaultValue={u?.email}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;

import { useAppSelector } from "../../redux/hook";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useGetSingleUserEmailQuery } from "../../redux/features/api/users";
import { useForm } from "react-hook-form";
import { useAddOrderMutation } from "../../redux/features/api/orders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutPage: React.FC = () => {
  const userInfo = useAppSelector(selectCurrentUser);

  const { data: userData } = useGetSingleUserEmailQuery(userInfo?.email);

  const [addNewOrder] = useAddOrderMutation(undefined);
  const navigate = useNavigate();

  const products: any[] = [];

  userData?.data?.cart.map(
    (item: {
      item: {
        _id: string;
      };
      quantity: number;
    }) => {
      products.push({
        product: item.item?._id,
        quantity: item.quantity,
      });
    }
  );

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);

    const order = {
      name: data.name,
      email: data.email,
      products: products,
      address: {
        division: data.division,
        district: data.district,
        upazila: data.upazila,
        area: data.area,
      },
      paid: data.payment_method === "online" ? true : false,
      payment_method: data.payment_method,
    };

    console.log(order);

    const res = await addNewOrder(order);

    console.log(res);

    if (res.error) {
      Swal.fire({
        icon: "error",
        title: "something went worng",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Order Placed",
        confirmButtonText: "view summary",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(`/order-complited/${res.data.data._id}`);
        }
      });
    }
  };

  // State for form input

  // Handle form submission

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
        {/* Personal Information */}
        <div className="card bg-base-100 shadow-xl p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Personal Information</h2>
          <div className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                {...register("name")}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered"
                {...register("email")}
                required
              />
            </div>
          </div>
        </div>

        {/* Shipping Address */}
        <div className="card bg-base-100 shadow-xl p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
          <div className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Division</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                {...register("division")}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">District</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                {...register("district")}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Upazila</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                {...register("upazila")}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Area</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                {...register("area")}
                required
              />
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="card bg-base-100 shadow-xl p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Payment Information</h2>
          <div className="space-y-4">
            <label className="fieldset-label text-lg title py-1">
              <input
                type="radio"
                className="radio"
                value="online"
                {...register("payment_method")}
                defaultChecked
              />
              Online
            </label>
            <label className="fieldset-label text-lg title py-1">
              <input
                type="radio"
                value="cash on delivary"
                {...register("payment_method")}
                className="radio"
              />
              Cash on delivary
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button className="btn btn-primary w-full max-w-xs">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;

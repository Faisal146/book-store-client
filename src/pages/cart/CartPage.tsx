// Define the type for a book item
import { Link } from "react-router-dom";
import titleBg from "../../assets/postero-bg-6.jpg";
import {
  useGetSingleUserEmailQuery,
  useRemoveFromCartMutation,
} from "../../redux/features/api/users";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hook";
import Swal from "sweetalert2";
import { TCartItem } from "../../types";
import bookImg from "../../assets/default_book.jpeg";

const CartPage = () => {
  const userInfo = useAppSelector(selectCurrentUser);

  const { data: userData } = useGetSingleUserEmailQuery(userInfo?.email);
  const [removeFromCart] = useRemoveFromCartMutation(undefined);

  let subTotal = 0;

  userData?.data?.cart.map((item: TCartItem) => {
    // console.log(item.item.price * item.quantity);

    subTotal += item.item.price * item.quantity;
  });

  const handleCartRemove = async (data: any) => {
    const res = await removeFromCart(data);
    console.log(res);
    if (res.error) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Removed from cart",
        showConfirmButton: false,
        timer: 1300,
      }).then((res) => {
        if (res.dismiss) {
          window.location.reload();
        }
      });
    }
  };
  // console.log(totalPrice);

  // Calculate the total price
  return (
    <div>
      <div
        className="bg-base-200 py-16 my-10 text-center "
        style={{
          background: `url(${titleBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <h1 className="text-4xl text-center">My Cart</h1>
      </div>

      <div className="max-w-6xl container mx-auto p-4">
        <div className="grid gap-6">
          {userData?.data?.cart.map((item: TCartItem) => (
            <div
              key={item._id}
              className="card card-side bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  src={item.item?.img ? item.item?.img : bookImg}
                  alt={item.item?.title}
                  className="w-32 h-32 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.item?.title}</h2>
                <p>by {item.item?.author}</p>
                <p>Price: {item.item?.price} TK.</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total Price: {item.quantity * item.item?.price}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleCartRemove({ item: item.item._id })}
                    className="btn btn-error btn-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 bg-base-200 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between items-center">
            <span>Total:</span>
            <span className="text-xl font-bold">{subTotal} TK.</span>
          </div>
          <Link to="/checkout" className="btn btn-primary w-full mt-6">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

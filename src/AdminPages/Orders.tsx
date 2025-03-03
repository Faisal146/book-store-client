import Swal from "sweetalert2";
import {
  useGetOrdersQuery,
  useRemoveOrderMutation,
} from "../redux/features/api/orders";
import { TOrder } from "../types";

const Orders = () => {
  const { data } = useGetOrdersQuery(undefined);
  console.log(data);

  const [deleteOrder] = useRemoveOrderMutation(undefined);

  const orders = data?.data?.result;

  const handleDelete = async (id: string, title: string) => {
    // Show confirmation alert
    const result = await Swal.fire({
      icon: "warning",
      title: "Are you Sure?",
      text: ` Order of ${title} will be deleted`,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes, Delete",
    });

    // If the user confirms, proceed to delete the product
    if (result.isConfirmed) {
      const deleteResult = await deleteOrder(id);
      if (deleteResult.error) {
        Swal.fire({
          icon: "error",
          title: "Oops... Something went wrong!",
          text: "There was an error while deleting the order.",
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Deleted Successfully",
          showConfirmButton: false,
          timer: 1300,
        });
      }
    }
  };

  return (
    <div>
      <div className="pb-6">
        <h1 className="text-3xl">Order Management</h1>
      </div>

      <div className="grid gap-6">
        {orders ? (
          orders.map((item: TOrder) => (
            <div
              key={item.name}
              className="card border-2 border-gray-100 card-side bg-base-100 shadow-xl"
            >
              <div className="card-body">
                <div className="flex gap-6 border-b">
                  <h2 className=" text-lg">User Name: {item?.user?.name}</h2>
                  <h2 className=" text-lg">Given Name: {item?.name}</h2>
                  <h2 className="text-lg">Given Email: {item?.email}</h2>
                </div>
                <h1 className="text-lg font-bold mt-2">Orders : </h1>
                {item.products.map((product) => (
                  <div className="flex justify-start items-center gap-5 bg-gray-100 rounded px-4">
                    <h2 className="font-bold ">{product.product.title}</h2>
                    {/* <p>by {product.product.author}</p> */}
                    <h3>Price: {product.product.price} TK.</h3>
                    <h3>Quantity: {product.quantity}</h3>
                    <h3>Total: {product.totalPrice} Tk.</h3>
                  </div>
                ))}
                <div className="flex mt-3 gap-6 border-b">
                  <h2 className="font-bold text-lg">
                    TotalPrice: {item?.totalPrice}
                  </h2>
                  <h2 className="text-lg">Status: {item?.status}</h2>
                  <h2 className="text-lg">
                    Payment Method: {item?.payment_method}
                  </h2>
                </div>
                <div className="flex mt-3 gap-6">
                  <h2 className="font-bold ">Shipping Address:</h2>
                  <h2 className="">division: {item?.address?.division}</h2>
                  <h2 className="">district: {item?.address?.district}</h2>
                  <h2 className="">Upazila: {item?.address?.upazila}</h2>
                  <h2 className="">Area: {item?.address?.area}</h2>
                </div>

                <div className="card-actions justify-end">
                  <button
                    className="btn btn-error btn-sm"
                    onClick={() => handleDelete(item?._id, item?.name)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Orders;

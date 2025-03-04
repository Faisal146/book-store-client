import Swal from "sweetalert2";
import {
  useGetOrdersQuery,
  useRemoveOrderMutation,
  useUpdateOrderMutation,
} from "../redux/features/api/orders";
import { TOrder } from "../types";

const Orders = () => {
  const { data } = useGetOrdersQuery(undefined);
  // console.log(data);

  const [deleteOrder] = useRemoveOrderMutation(undefined);
  const [updateOrder] = useUpdateOrderMutation(undefined);

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

  const updateOrderStatus = async (
    e: any,
    id: string,
    currentStatus: string
  ) => {
    const value = e.target.value;

    if (value === currentStatus) {
      Swal.fire({
        icon: "error",
        title: `current status is ${value}`,
      });
    } else {
      const data = {
        status: value,
      };
      const updated = await updateOrder({ id, data });
      if (updated.error) {
        Swal.fire({
          icon: "error",
          title: `something went wrong`,
        });
      } else {
        Swal.fire({
          icon: "success",
          title: `Order status updated to  ${value}`,
        });
      }
    }
  };
  const updatePaymentStatus = async (
    e: any,
    id: string,
    currentStatus: boolean
  ) => {
    const value = e.target.value === "true" ? true : false;

    if (value === currentStatus) {
      Swal.fire({
        icon: "error",
        title: `current status is ${value}`,
      });
    } else {
      const data = {
        paid: value,
      };
      const updated = await updateOrder({ id, data });
      if (updated.error) {
        Swal.fire({
          icon: "error",
          title: `something went wrong`,
        });
      } else {
        Swal.fire({
          icon: "success",
          title: `Payment status updated`,
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
        {orders && orders?.length > 0 ? (
          orders.map((item: TOrder) => (
            <div
              key={item._id}
              className="cardborder-2 border-gray-100 card-side bg-base-100 shadow-xl"
            >
              <div className="card-body  md:p-8 p-4 ">
                <div className="flex flex-wrap md:flex-row flex-col md:gap-6 gap-2 border-b">
                  <h2 className=" text-lg">User Name: {item?.user?.name}</h2>
                  <h2 className=" text-lg">Given Name: {item?.name}</h2>
                  <h2 className="text-lg">Given Email: {item?.email}</h2>
                </div>
                <h1 className="text-lg font-bold mt-2">Orders : </h1>
                {item.products.map((product) => (
                  <div className="flex flex-wrap md:flex-row flex-col md:gap-5 gap-2 justify-start md:items-center items-start  bg-gray-100 rounded px-4">
                    <h2 className="font-bold ">{product.product.title}</h2>
                    {/* <p>by {product.product.author}</p> */}
                    <h3>Price: {product.product.price} TK.</h3>
                    <h3>Quantity: {product.quantity}</h3>
                    <h3>Total: {product.totalPrice} Tk.</h3>
                  </div>
                ))}
                <div className="flex flex-wrap md:flex-row flex-col md:gap-6 gap-2 mt-3  border-b">
                  <h2 className="font-bold text-lg">
                    TotalPrice: {item?.totalPrice}
                  </h2>
                  <h2 className="text-lg">Status: {item?.status}</h2>
                  <h2 className="text-lg">
                    Payment Method: {item?.payment_method}
                  </h2>
                  <h2 className="text-lg">
                    Payment Status: {item?.paid ? "Paid" : "Not Paid"}
                  </h2>
                </div>
                <div className="flex flex-wrap md:flex-row flex-col md:gap-6 gap-2 mt-3 ">
                  <h2 className="font-bold ">Shipping Address:</h2>
                  <h2 className="">division: {item?.address?.division}</h2>
                  <h2 className="">district: {item?.address?.district}</h2>
                  <h2 className="">Upazila: {item?.address?.upazila}</h2>
                  <h2 className="">Area: {item?.address?.area}</h2>
                </div>

                <div className="card-actions md:justify-end justify-start mt-4">
                  <select
                    defaultValue="Update Status"
                    onChange={() =>
                      updateOrderStatus(event, item?._id, item?.status)
                    }
                    className="select w-40 bg-cyan-200 title"
                  >
                    <option disabled={true}>Update Status</option>
                    <option>placed</option>
                    <option>order recevied</option>
                    <option>order prepaired</option>
                    <option>handed to curier</option>
                    <option>arrived</option>
                    <option>complited</option>
                  </select>
                  <select
                    defaultValue="Update Payment Status"
                    className="select w-44  bg-cyan-200 title"
                    onChange={() =>
                      updatePaymentStatus(event, item?._id, item?.paid)
                    }
                  >
                    <option disabled={true}>Update Payment Status</option>
                    <option value="true">Paid</option>
                    <option value="false">Not Paid</option>
                  </select>

                  <button
                    className="btn btn-error "
                    onClick={() => handleDelete(item?._id, item?.name)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            {orders?.length < 1 ? (
              <h1 className="h-96 text-center">No order found</h1>
            ) : (
              <h1 className="h-96 text-center">Loading...</h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;

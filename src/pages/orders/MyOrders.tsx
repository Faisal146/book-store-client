import Swal from "sweetalert2";
import titleBg from "../../assets/postero-bg-6.jpg";
import {
  useGetUserOrdersQuery,
  useRemoveOrderMutation,
} from "../../redux/features/api/orders";
import { TOrder } from "../../types";

const MyOrders = () => {
  const { data } = useGetUserOrdersQuery(undefined);
  console.log(data);

  const [deleteOrder] = useRemoveOrderMutation(undefined);

  const orders = data?.data;

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
      <div
        className="bg-base-200 py-16 my-10 text-center "
        style={{
          background: `url(${titleBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <h1 className="text-4xl text-center">My orders</h1>
      </div>

      <div className="max-w-6xl mx-auto grid gap-6 min-h-96 mb-12 px-4">
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
                <div className="flex flex-wrap md:flex-row flex-col md:gap-6 gap-0 mt-3  border-b">
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

export default MyOrders;

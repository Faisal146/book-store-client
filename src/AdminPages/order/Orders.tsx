import { FaPlus, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import {
  useGetOrdersQuery,
  useRemoveOrderMutation,
} from "../../redux/features/api/orders";

const Orders = () => {
  let id = 1;

  const { data } = useGetOrdersQuery(undefined);
  console.log(data);

  const [deleteOrder] = useRemoveOrderMutation(undefined);

  const orders = data?.data?.result;

  const handleDelete = async (id, title) => {
    // Show confirmation alert
    const result = await Swal.fire({
      icon: "warning",
      title: "Are you Sure?",
      text: ` Order ${title} will be deleted`,
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

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Product</th>
              <th>Customer </th>
              <th>Quantity</th>
              <th>TotalPrice</th>
              <th>Shipping Address</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {orders ? (
              orders.map((item) =>
                item.placed ? (
                  <tr>
                    <th>{id++}</th>
                    <th>{item.email}</th>
                    <th>{item.product?.title}</th>
                    <th>{item.user?.name}</th>
                    <td>{item.quantity}</td>
                    <td>{item.totalPrice}</td>
                    <td>
                      {item.address?.division}, {item.address?.district},{" "}
                      {item.address?.upazila}, {item.address?.area}{" "}
                    </td>
                    <td>
                      {" "}
                      {/* <Link
                        to={`/admin/products/update/${item._id}`}
                        className="btn btn-info mr-2"
                      >
                        <FaEdit></FaEdit>
                      </Link> */}
                      <button
                        onClick={() =>
                          handleDelete(item._id, item.product?.title)
                        }
                        className="btn btn-error"
                      >
                        <FaTrash></FaTrash>
                      </button>
                    </td>
                  </tr>
                ) : (
                  ""
                )
              )
            ) : (
              <h1>loading...</h1>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;

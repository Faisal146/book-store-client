import { FaPlus, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import {
  useGetBooksQuery,
  useRemoveBookMutation,
} from "../redux/features/api/products";
import Swal from "sweetalert2";
import { useState } from "react";
import { useForm } from "react-hook-form";
import bookImg from "../assets/default_book.jpeg";
import { TProduct } from "../types";

const Products = () => {
  const [filter, setFilter] = useState(null);
  const [id, setId] = useState(0);
  const { register, handleSubmit } = useForm();

  const { data } = useGetBooksQuery(filter);

  const [deleteProduct] = useRemoveBookMutation(undefined);

  const products = data?.data?.result;

  const totalPage = Array.from(
    { length: data?.data?.meta.totalPage },
    (_, index) => index + 1
  );

  const onPaginate = (data: any) => {
    //  console.log(data);
    setFilter(data);
    // setId((data.page - 1) * 9);
    setId((data.page - 1) * 9);
  };

  const handleDelete = async (id: string, title: string) => {
    try {
      // Show confirmation alert
      const result = await Swal.fire({
        icon: "warning",
        title: "Are you Sure?",
        text: `${title} will be deleted`,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "Yes, Delete",
      });

      // If the user confirms, proceed to delete the product
      if (result.isConfirmed) {
        const deleteResult = await deleteProduct(id);
        if (deleteResult.error) {
          Swal.fire({
            icon: "error",
            title: "Oops... Something went wrong!",
            text: "There was an error while deleting the book.",
          });
        } else {
          Swal.fire({
            icon: "success",
            title: "Deleted Successfully",
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
      <div className="flex  gap-12 pb-6">
        <h1 className="text-3xl">Product Management</h1>
        <Link to="/admin/products/add" className="btn btn-primary">
          <FaPlus></FaPlus>
          Add New Product
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Stock Status</th>
              <th>Price</th>
              <th>Actons</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {products ? (
              products.map((item: TProduct, index: number) => (
                <tr>
                  <th>{id + index + 1}</th>

                  <th>
                    <img
                      src={item?.img ? item?.img : bookImg}
                      alt=""
                      className="h-12 w-12 rounded-md"
                    />
                  </th>
                  <th>{item.title}</th>
                  <th>{item.category}</th>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>
                    {" "}
                    <Link
                      to={`/admin/products/update/${item._id}`}
                      className="btn btn-info mr-2"
                    >
                      <FaEdit></FaEdit>
                    </Link>
                    <button
                      onClick={() => handleDelete(item._id, item.title)}
                      className="btn btn-error"
                    >
                      <FaTrash></FaTrash>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <h1>loading...</h1>
            )}
          </tbody>
        </table>

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
    </div>
  );
};

export default Products;

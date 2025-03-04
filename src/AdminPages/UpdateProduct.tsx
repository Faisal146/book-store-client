import { useForm } from "react-hook-form";
import {
  useGetSigleBookQuery,
  useUpdateBookMutation,
} from "../redux/features/api/products";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";

const UpdateProduct = () => {
  const { id } = useParams();

  const { data } = useGetSigleBookQuery(id);

  const [updatebook] = useUpdateBookMutation(undefined);

  const b = data?.data;

  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    data.price = Number(data.price);
    data.quantity = Number(data.quantity);

    const UpdatedData: any = {};
    Object.keys(data).forEach((item) => {
      if (data[item]) {
        UpdatedData[item] = data[item];
      }
    });

    const result = await updatebook({ id, UpdatedData });
    console.log(result);

    if (result.error) {
      Swal.fire({
        icon: "error",
        title: "something went worng",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Product updated",
        showConfirmButton: false,
        timer: 1300,
      }).then((res) => {
        if (res.dismiss) {
          window.location.reload();
        }
      });
    }
  };

  return (
    <div>
      <Link to="/admin/products" className="btn btn-soft shadow mb-3">
        <FaAngleLeft></FaAngleLeft>
        Back
      </Link>
      <div className="flex  gap-12 pb-6">
        <h1 className="text-3xl">Update Product : {b?.title} </h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Book title</legend>
          <input
            type="text"
            defaultValue={b?.title}
            className="input"
            placeholder="Type product name"
            {...register("title")}
          />
          <p className="validator-hint"></p>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Book Author</legend>
          <input
            type="text"
            defaultValue={b?.author}
            className="input"
            placeholder="Type author name"
            {...register("author")}
          />
          <p className="validator-hint"></p>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Descripton</legend>
          <input
            type="text"
            defaultValue={b?.description}
            className="input"
            placeholder="Type product description"
            {...register("description")}
          />
          <p className="validator-hint"></p>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Categor</legend>
          <select
            defaultValue={b?.category}
            className="select"
            {...register("category")}
          >
            <option disabled={true}>Pick a category</option>
            <option>Story</option>
            <option>Fiction</option>
            <option>Romantic</option>
            <option>Science</option>
            <option>SelfDevelopment</option>
            <option>Poetry</option>
            <option>Religious</option>
          </select>
          <p className="validator-hint"></p>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Price</legend>
          <input
            type="number"
            defaultValue={b?.price}
            className="input"
            placeholder="Type product Price"
            {...register("price")}
          />
          <p className="validator-hint"></p>
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">quantity</legend>
          <input
            type="number"
            className="input"
            defaultValue={b?.quantity}
            placeholder="Type product quantity"
            {...register("quantity")}
          />
          <p className="validator-hint"></p>
        </fieldset>
        <button className="btn btn-info">Submit</button>
      </form>
    </div>
  );
};

export default UpdateProduct;

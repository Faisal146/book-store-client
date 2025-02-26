import { useForm } from "react-hook-form";
import { useAddBookMutation } from "../redux/features/api/products";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";

const ProductForm = () => {
  const [addbook] = useAddBookMutation(undefined);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    data.price = Number(data.price);
    data.quantity = Number(data.quantity);

    const result = await addbook(data);
    console.log(result);

    if (result.error) {
      Swal.fire({
        icon: "error",
        title: "something went worng",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Product added",
        showConfirmButton: false,
        timer: 1300,
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
        <h1 className="text-3xl">Add New Product </h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Book title</legend>
          <input
            type="text"
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
            className="input"
            placeholder="Type product description"
            {...register("description")}
          />
          <p className="validator-hint"></p>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Categor</legend>
          <select className="select" {...register("category")}>
            <option value={"s"} disabled={true}>
              Pick a category
            </option>
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

export default ProductForm;

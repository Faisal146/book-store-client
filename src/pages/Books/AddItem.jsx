import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import titleBg from "../../assets/back-7.webp";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const AddItem = () => {
  const { user, loader } = useContext(AuthContext);

  const handleAdd = (e) => {
    e.preventDefault();
    let image = e.target.image.value;
    let name = e.target.name.value;
    let subcategory = e.target.subcategory.value;
    let short_description = e.target.short_description.value;
    let customization = e.target.customization.value;
    let stock_status = e.target.stock_status.value;
    let price = e.target.price.value;
    let rating = e.target.rating.value;
    let Processing_time = e.target.Processing_time.value;
    let user_email = user.email;
    let user_name = user.displayName;

    const item = {
      image,
      name,
      subcategory,
      short_description,
      customization,
      stock_status,
      price,
      rating,
      Processing_time,
      user_email,
      user_name,
    };

    console.log(item);

    fetch("https://craft-place-server-2.vercel.app/items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        // const newUsers = [...users , data];
        // setUsers(newUsers)

        Swal.fire({
          title: "Success!",
          text: "This Item Added Successfully !!",
          icon: "success",
          confirmButtonText: "Ok",
        });

        console.log(data);
      });
  };

  if (loader) {
    return (
      <div className="text-center py-20  ">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }

  return (
    <div>
      <div
        className="bg-base-200 py-16 my-10 "
        style={{ background: `url(${titleBg})`, backgroundSize: "cover" }}
      >
        <h1 className="text-4xl text-center">Add new Art and Drawing Item</h1>
      </div>
      <div className="my-12 mx-4">
        <form action="" onSubmit={handleAdd}>
          <div className="max-w-6xl mx-auto md:flex block gap-6 my-4">
            <input
              type="text"
              className="input w-full my-2 input-bordered flex-1"
              placeholder="Image URL"
              name="image"
            />
            <input
              type="text"
              className="input w-full my-2 input-bordered flex-1"
              placeholder="Item Name"
              name="name"
            />
          </div>
          <div className="max-w-6xl mx-auto md:flex block gap-6 my-4">
            {/* <input type="text" className="input w-full my-2 input-bordered flex-1" placeholder="Subcategory Name" name='subcategory' /> */}

            <select
              className="select select-bordered w-full my-2 flex-1"
              name="subcategory"
            >
              <option disabled selected>
                Sub Category ?
              </option>
              <option value="Landscape Painting">Landscape Painting</option>
              <option value="Portrait Drawing">Portrait Drawing</option>
              <option value="Oil Painting">Oil Painting</option>
              <option value="Charcoal Sketching">Charcoal Sketching</option>
              <option value="Watercolour Painting">Watercolour Painting</option>
              <option value="Cartoon Drawing">Cartoon Drawing</option>
            </select>

            <input
              type="text"
              className="input w-full my-2 input-bordered flex-1"
              placeholder="Short description"
              name="short_description"
            />
          </div>
          <div className="max-w-6xl mx-auto md:flex block gap-6 my-4">
            <input
              type="number"
              className="input w-full my-2 input-bordered flex-1"
              placeholder="price"
              name="price"
            />
            <input
              type="number"
              min="0"
              max="5"
              className="input w-full my-2 input-bordered flex-1"
              placeholder="rating (0-5)"
              name="rating"
            />
          </div>
          <div className="max-w-6xl mx-auto md:flex block gap-6 my-4">
            <select
              className="select select-bordered w-full my-2 flex-1"
              name="customization"
            >
              <option disabled selected>
                Customization ?
              </option>
              <option value="yes">yes</option>
              <option value="no">no</option>
            </select>

            <input
              type="text"
              className="input w-full my-2 input-bordered flex-1"
              placeholder="Processing time"
              name="Processing_time"
            />
          </div>
          <div className="max-w-6xl mx-auto  gap-6 my-4">
            <select
              className="select select-bordered w-full  block "
              name="stock_status"
            >
              <option disabled selected>
                Stock Status ?
              </option>
              <option value="Made to order">made to order</option>
              <option value="In stock">In stock</option>
            </select>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary w-64">
              <FaPlus></FaPlus> Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;

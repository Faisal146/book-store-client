import { FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Items = () => {
  return (
    <div>
      <div className="items max-w-6xl mx-auto flex flex-wrap justify-around">
        <div className="md:w-1/3">
          <div className="card bg-base-100 shadow-xl p-3 m-2">
            <img src="" alt="" className="rounded-lg h-48 object-cover" />

            <div className="my-3">
              <div className="flex justify-between">
                <h3 className="text-gray-500 uppercase">'fiction'</h3>
                <h3 className="text-gray-800 uppercase flex items-center text-xl gap-2">
                  {" "}
                  <FaStar className="text-yellow-600"></FaStar>{" "}
                  <span className="mb-2">4.9</span>{" "}
                </h3>
              </div>

              <h2 className="card-title">'Daniels Daily'</h2>
              <div className="flex justify-between">
                <h2 className="text-2xl mt-3 font-bold text-gray-600">300TK</h2>
                <p className="btn btn-sm  mt-2"> in stok</p>
              </div>

              <div className="card-actions justify-end">
                <Link
                  to={`/details/}`}
                  className="btn btn-primary w-full btn-sm mt-4"
                >
                  {" "}
                  <FaEye></FaEye> See Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link to="all" className="btn btn-accent w-64 my-8 font-bold text-lg">
          {" "}
          See All Items{" "}
        </Link>
      </div>
    </div>
  );
};

export default Items;

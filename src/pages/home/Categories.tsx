import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div>
      <div className="my-12  max-w-6xl mx-auto ">
        <div className="items flex  justify-center flex-wrap">
          <Link
            to="/all/Landscape Painting"
            className="item   w-96  bg-amber-200  text-center p-2 "
          >
            <div className="flex flex-col justify-center items-center  rounded-2xl py-8 border border-gray-300 px-3 hover:bg-gray-200   transition">
              <img
                src=""
                className="h-32 w-40 mb-3 rounded-xl object-cover"
                alt=""
              />
              <h1 className="text-3xl pb-1 text "> Science</h1>
            </div>
          </Link>
          <Link
            to="/all/Landscape Painting"
            className="item   w-96  bg-red-200  text-center p-2 "
          >
            <div className="flex flex-col justify-center items-center  rounded-2xl py-8 border border-gray-300 px-3 hover:bg-gray-200   transition">
              <img
                src=""
                className="h-32 w-40 mb-3 rounded-xl object-cover"
                alt=""
              />
              <h1 className="text-3xl pb-1 text "> Science</h1>
            </div>
          </Link>
          <Link
            to="/all/Landscape Painting"
            className="item   w-96  bg-blue-200  text-center p-2 "
          >
            <div className="flex flex-col justify-center items-center  rounded-2xl py-8 border border-gray-300 px-3 hover:bg-gray-200   transition">
              <img
                src=""
                className="h-32 w-40 mb-3 rounded-xl object-cover"
                alt=""
              />
              <h1 className="text-3xl pb-1 text "> Science</h1>
            </div>
          </Link>
          <Link
            to="/all/Landscape Painting"
            className="item   w-96 bg-green-200   text-center p-2 "
          >
            <div className="flex flex-col justify-center items-center  rounded-2xl py-8 border border-gray-300 px-3 hover:bg-gray-200   transition">
              <img
                src=""
                className="h-32 w-40 mb-3 rounded-xl object-cover"
                alt=""
              />
              <h1 className="text-3xl pb-1 text "> Science</h1>
            </div>
          </Link>
          <Link
            to="/all/Landscape Painting"
            className="item   w-96  bg-cyan-200  text-center p-2 "
          >
            <div className="flex flex-col justify-center items-center  rounded-2xl py-8 border border-gray-300 px-3 hover:bg-gray-200   transition">
              <img
                src=""
                className="h-32 w-40 mb-3 rounded-xl object-cover"
                alt=""
              />
              <h1 className="text-3xl pb-1 text "> Science</h1>
            </div>
          </Link>
          <Link
            to="/all/Landscape Painting"
            className="item   w-96  bg-orange-200  text-center p-2 "
          >
            <div className="flex flex-col justify-center items-center  rounded-2xl py-8 border border-gray-300 px-3 hover:bg-gray-200   transition">
              <img
                src=""
                className="h-32 w-40 mb-3 rounded-xl object-cover"
                alt=""
              />
              <h1 className="text-3xl pb-1 text "> Science</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;

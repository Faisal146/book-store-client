import Item from "./Item";
import titleBg from "../../assets/postero-bg-6.jpg";
import { FaFilter, FaPlus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useGetBooksQuery } from "../../redux/features/api/products";

const AllItems = () => {
  const { data } = useGetBooksQuery(undefined);

  console.log(data);

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
        <h1 className="text-4xl text-center">Our Books</h1>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content p-4">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              <FaFilter />
              Filter
            </label>

            <label className="input w-full bg-blue-100">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                required
                placeholder="Search"
                className="w-full"
              />
            </label>

            <div className="flex flex-wrap">
              {data?.data?.result ? (
                data.data.result.map((item, index) => {
                  return <Item item={item} key={index}></Item>;
                })
              ) : (
                <span className="loading mx-auto mt-20 mb-20 loading-dots loading-lg"></span>
              )}
            </div>

            <div className="flex justify-center">
              <div className="join my-6">
                <button className="join-item btn">1</button>
                <button className="join-item btn btn-active">2</button>
                <button className="join-item btn">3</button>
                <button className="join-item btn">4</button>
              </div>
            </div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-72 p-4">
              {/* Sidebar content here */}

              <form>
                <h1 className="text-2xl mb-3 mt-6">Categories</h1>

                <label className="fieldset-label text-lg title py-1">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  Fiction
                </label>
                <label className="fieldset-label text-lg title py-1">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  Romance
                </label>
                <label className="fieldset-label text-lg title py-1">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  Science
                </label>
                <label className="fieldset-label text-lg title py-1">
                  <input type="checkbox" defaultChecked className="checkbox" />
                  Fiction
                </label>

                <h1 className="text-2xl mb-3 mt-6">Price</h1>

                <label className="fieldset-label text-lg title py-1">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio"
                    defaultChecked
                  />
                  Low to heigh
                </label>
                <label className="fieldset-label text-lg title py-1">
                  <input
                    type="radio"
                    name="radio-1"
                    className="radio"
                    defaultChecked
                  />
                  Heigh to Low
                </label>

                <button type="submit" className="btn btn-info mt-4">
                  <FaFilter></FaFilter> Filter
                </button>
              </form>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllItems;

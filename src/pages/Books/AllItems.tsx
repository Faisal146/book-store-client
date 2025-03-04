import Item from "./Item";
import titleBg from "../../assets/pckk4xhg.png";
import { FaFilter } from "react-icons/fa";
import { useGetBooksQuery } from "../../redux/features/api/products";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TProduct } from "../../types";

const AllItems = () => {
  interface FilterState {
    category?: string[];
    // Add other filter properties if needed
  }
  const [filter, setFilter] = useState<FilterState | null>(null);

  const { data } = useGetBooksQuery(filter);

  const { category } = useParams();

  useEffect(() => {
    if (category) {
      setFilter({ category: [category] });
    }
  }, [category]);

  const { register, handleSubmit } = useForm();

  const totalPage = Array.from(
    { length: data?.data?.meta.totalPage },
    (_, index) => index + 1
  );

  // console.log("totalpage = ", totalPage);

  const onFilter = (data: any) => {
    // console.log(data);
    setFilter(data);
  };
  const onSearch = (data: any) => {
    //  console.log(data);
    setFilter(data);
  };
  const onPaginate = (data: any) => {
    //  console.log(data);
    setFilter(data);
  };

  return (
    <div>
      <div
        className="bg-base-200 py-16 my-10 text-center "
        style={{
          background: `url(${titleBg})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
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
              className="btn btn-primary drawer-button lg:hidden mb-4"
            >
              <FaFilter />
              Filter
            </label>
            <form onSubmit={handleSubmit(onSearch)} className="flex gap-3">
              <label className="input w-full bg-cyan-50">
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
                  placeholder="Search"
                  className="w-full"
                  {...register("searchTerm")}
                />
              </label>
              <button type="submit" className="btn btn-info">
                Search
              </button>
            </form>

            <div className="flex flex-wrap">
              {data?.data?.result && data?.data?.result.length > 0 ? (
                data.data.result.map((item: TProduct, index: number) => {
                  return <Item item={item} key={index}></Item>;
                })
              ) : data?.data?.result.length === 0 ? (
                <h1 className=" mt-32 mb-36 text-center text-2xl">
                  {" "}
                  No books found based on your query!{" "}
                </h1>
              ) : (
                <span className="loading mx-auto mt-32 mb-36 loading-dots loading-lg"></span>
              )}
            </div>

            <div className="flex justify-center py-8">
              <div className="join">
                <form onChange={handleSubmit(onPaginate)}>
                  {totalPage.map((item) => (
                    <input
                      className={`join-item btn ${
                        data?.data?.meta.page == item
                          ? "btn-primary"
                          : "btn-soft"
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
          <div className="drawer-side top-14">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-72 p-4">
              {/* Sidebar content here */}

              <form onSubmit={handleSubmit(onFilter)}>
                <h1 className="text-2xl mb-3 mt-6">Categories</h1>

                {[
                  "Fiction",
                  "Story",
                  "Romantic",
                  "Science",
                  "SelfDevelopment",
                  "Poetry",
                  "Religious",
                ].map((item) => (
                  <label className="fieldset-label text-lg title py-1">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox"
                      value={item}
                      {...register("category")}
                    />
                    {item}
                  </label>
                ))}

                <h1 className="text-2xl mb-3 mt-6">Price</h1>

                <label className="fieldset-label text-lg title py-1">
                  <input
                    type="radio"
                    className="radio"
                    defaultChecked
                    value="price"
                    {...register("price")}
                  />
                  Low to High
                </label>
                <label className="fieldset-label text-lg title py-1">
                  <input
                    type="radio"
                    className="radio"
                    value="-price"
                    {...register("price")}
                  />
                  High to Low
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

import Slide from "./Slider";
import Categories from "./Categories";

import img from "../../assets/21-books-GQ-April-2018-041718-3x2.webp";
import aboutimg from "../../assets/hand-drawn-flat-design-stack-books-illustration_23-2149341897.jpg";
import { Link } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";
import { useGetBooksQuery } from "../../redux/features/api/products";
import Item from "../Books/Item";
import { TProduct } from "../../types";

const Home = () => {
  // random books to show for popular and bestseller
  const { data: popular } = useGetBooksQuery({ limit: 6 });
  const { data: bestsellers } = useGetBooksQuery({ limit: 5, page: 2 });

  //  console.log("popular", popular);
  // console.log(bestsellers);

  return (
    <div>
      <Slide></Slide>

      <Categories></Categories>

      <div className="bg-gray-100 py-8">
        <div>
          <h1 className="text-center text-4xl my-10 font">Best seller books</h1>
        </div>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center">
          {bestsellers?.data?.result && bestsellers?.data?.result.length > 0 ? (
            bestsellers.data.result.map((item: TProduct, index: number) => {
              return <Item item={item} key={index}></Item>;
            })
          ) : bestsellers?.data?.result.length === 0 ? (
            <h1 className=" mt-32 mb-36 text-center text-2xl">
              No Books found{" "}
            </h1>
          ) : (
            <span className="loading mx-auto mt-32 mb-36 loading-dots loading-lg"></span>
          )}
        </div>
      </div>

      <div className="bg-cyan-300 py-10 md:px-0 px-8">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-6 justify-between items-center">
          <div className="">
            <h1 className="text-4xl">2024 Book Award Shortlist</h1>
            <p className="md:w-96 w-full mt-4">
              The book award shortlist for 2024 has been been publish. we have
              all books in our stock
            </p>
            <Link to="/books" className="btn btn-info mt-6">
              Shop now
            </Link>
          </div>
          <div>
            <img src={img} className="rounded-2xl h-56" alt="" />
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center text-4xl my-10 font">Popular books</h1>
      </div>

      <div className="max-w-6xl mx-auto flex flex-wrap justify-center">
        {popular?.data?.result && popular?.data?.result.length > 0 ? (
          popular.data.result.map((item: TProduct, index: number) => {
            return <Item item={item} key={index}></Item>;
          })
        ) : popular?.data?.result.length === 0 ? (
          <h1 className=" mt-32 mb-36 text-center text-2xl">No Books found </h1>
        ) : (
          <span className="loading mx-auto mt-32 mb-36 loading-dots loading-lg"></span>
        )}
      </div>
      <div className=" bg-gray-100">
        <div className="about max-w-6xl mx-auto flex flex-wrap mt-16 mb-16 items-center">
          <div className="left md:w-1/2 p-10">
            <img
              src={aboutimg}
              alt="about img"
              className="border-2 border-gray-200 rounded-2xl"
            />
          </div>
          <div className="right md:w-1/2 md:pl-10 px-3">
            <h1 className="text-4xl font-bold mb-4 title">
              Books From The Core And Pursue Your Passion
            </h1>

            <p className="text-orange-700 text-md my-7 text-xl text ">
              {" "}
              More Than Just a Bookshop
            </p>
            <p className="text">
              Welcome to Moonlight, where our love for books and community comes
              to life. Founded in 2020, we've grown from a small corner store to
              a beloved hub for book lovers of all ages. Our mission is simple:
              to connect people with stories that inspire, educate, and bring
              joy.
              <br />
              <br />
              We take pride in curating a diverse collection of books, from
              timeless classics to contemporary bestsellers, ensuring there's
              something for everyone. But we're more than just a place to buy
              books—we're a space for connection. Join us for book clubs, author
              events, and cozy reading nooks that make every visit memorable.
            </p>

            <Link to="/about" className="btn btn-primary w-64 mt-6">
              About Us <FaPaperPlane></FaPaperPlane>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

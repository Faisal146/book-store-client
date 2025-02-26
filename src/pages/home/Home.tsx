import Slide from "./Slider";
import Categories from "./Categories";
import Items from "../Books/Items";

import img from "../../assets/21-books-GQ-April-2018-041718-3x2.webp";
import aboutimg from "../../assets/hand-drawn-flat-design-stack-books-illustration_23-2149341897.jpg";
import { Link } from "react-router-dom";
import { FaPaperPlane } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <Slide></Slide>

      <Categories></Categories>

      <div className="bg-gray-100 py-8">
        <div>
          <h1 className="text-center text-4xl my-10 font">Best seller books</h1>
        </div>{" "}
        <Items></Items>
      </div>

      <div className="bg-cyan-300 py-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="">
            <h1 className="text-4xl">2024 Book Award Shortlist</h1>
            <p className="w-96 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
              laboriosam veritatis maxime laborum laudantium illum
            </p>
            <button className="btn btn-info mt-6">Shop now</button>
          </div>
          <div>
            <img src={img} className="rounded-2xl h-56" alt="" />
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-center text-4xl my-10 font">Popular books</h1>
      </div>

      <Items></Items>
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
            <h1 className="text-4xl font-bold mb-4 pt-8 title">
              The Art From The Core And Pursue Your Passion
            </h1>

            <p className="text-orange-700 text-md my-7 text-xl text ">
              {" "}
              we are First online painting seller in the country
            </p>
            <p className="text">
              Here you will find posters; posters with illustrations, paintings,
              graphics and photographs made by renowned artists from around the
              world. We hand-pick every single art piece from the many artists
              and make sure that you get exclusive posters in quality print for
              your home or workplace.
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

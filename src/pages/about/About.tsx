import aboutImage from "../../assets/street_stall_bookshop.jpg";
import titleBg from "../../assets/3m80uvkf.png";
import { Link } from "react-router-dom";

import image1 from "../../assets/hand-drawn-flat-design-stack-books-illustration_23-2149341897.jpg";
import image2 from "../../assets/Poetry.jpg";
import image3 from "../../assets/Romantic.avif";

const About = () => {
  return (
    <div>
      <div
        className="bg-base-200 py-16 my-10 "
        style={{ background: `url(${titleBg})`, backgroundSize: "cover" }}
      >
        <h1 className="text-4xl text-center">About Us</h1>
      </div>
      <div className="about max-w-6xl mx-auto flex flex-wrap mt-16 mb-16 items-center">
        <div className="left md:w-1/2">
          <img src={aboutImage} alt="about img" />
        </div>
        <div className="right md:w-1/2 md:pl-10 px-3">
          <h1 className="text-4xl font-bold mb-4 pt-8">
            More Than Just a Bookshop
          </h1>

          <p className="my-7">
            Welcome to Moonlight Book Shop, where our love for books and
            community comes to life. Founded in 2020, we've grown from a small
            corner store to a beloved hub for book lovers of all ages. Our
            mission is simple: to connect people with stories that inspire,
            educate, and bring joy.
            <br />
            <br />
            We take pride in curating a diverse collection of books, from
            timeless classics to contemporary bestsellers, ensuring there's
            something for everyone. But we're more than just a place to buy
            books—we're a space for connection. Join us for book clubs, author
            events, and cozy reading nooks that make every visit memorable.
            <br />
            <br />
            At Moonlight Book Shop, we believe in the power of stories to
            transform lives. Whether you're a lifelong reader or just starting
            your journey, we're here to help you find your next great read.
            Thank you for being part of our story. Let's turn the page together!
          </p>

          <Link to="/all" className="btn mt-6 btn-primary w-64">
            {" "}
            All Items
          </Link>
        </div>
      </div>

      <div className="my-12   ">
        <h1 className="text-center text-4xl my-10 font-bold">
          {" "}
          Our Speciality{" "}
        </h1>
        <div className="items flex  justify-center flex-wrap max-w-6xl mx-auto">
          <div className="item flex w-96 flex-col justify-center items-center       text-center py-8 border px-3  border-gray-200 hover:bg-gray-200  transition">
            <img
              src={image1}
              className="h-40 w-40 mb-3 rounded-xl object-cover"
              alt=""
            />
            <h1 className="text-3xl pb-1 "> Unique books</h1>
            <p className="text-lg  text-gray-400">
              Dont have the same boring books as everyone else. Create a sense
              of individuality by gather books that represents your personal
              style and taste
            </p>
          </div>
          <div className="item flex w-96  flex-col justify-center items-center     text-center py-8 border px-3  border-gray-200 hover:bg-gray-200  transition">
            <img
              src={image2}
              className="h-40 w-40 mb-3 rounded-xl object-cover"
              alt=""
            />
            <h1 className="text-3xl pb-1 "> Carefully Picked</h1>
            <p className="text-lg text-gray-400">
              {" "}
              Our carefully curated collection ensures there's something for
              every reader.
            </p>
          </div>
          <div className="item flex w-96 flex-col justify-center items-center     text-center py-8 border border-gray-200 px-3 hover:bg-gray-200  transition">
            <img
              src={image3}
              className="h-40 w-40 mb-3 rounded-xl object-cover"
              alt=""
            />
            <h1 className="text-3xl pb-1 ">Best authors</h1>
            <p className="text-lg text-gray-400">
              Explore our diverse collection of books, handpicked to ignite your
              imagination and touch your heart.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

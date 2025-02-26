import aboutImage from "../../assets/best-of-2019.png";
import titleBg from "../../assets/best-of-2019.png";
import { Link } from "react-router-dom";

import image1 from "../../assets/best-of-2019.png";
import image2 from "../../assets/best-of-2019.png";
import image3 from "../../assets/best-of-2019.png";

const About = () => {
  return (
    <div>
      <div
        className="bg-base-200 py-16 my-10 "
        style={{ background: `url(${titleBg})`, backgroundSize: "cover" }}
      >
        <h1 className="text-4xl text-center">About Us</h1>
      </div>
      <div className="about max-w-6xl mx-auto flex flex-wrap mt-16 mb-16">
        <div className="left md:w-1/2">
          <img src={aboutImage} alt="about img" />
        </div>
        <div className="right md:w-1/2 md:pl-10 px-3">
          <h1 className="text-4xl font-bold mb-4 pt-8">
            The Art From The Core And Pursue Your Passion
          </h1>

          <p className="text-orange-700 text-md my-7 text-xl">
            {" "}
            we are First online painting seller in the country
          </p>
          <p>
            Here you will find posters; posters with illustrations, paintings,
            graphics and photographs made by renowned artists from around the
            world. We hand-pick every single art piece from the many artists and
            make sure that you get exclusive posters in quality print for your
            home or workplace.
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
          Transform Your Space{" "}
        </h1>
        <div className="items flex  justify-center flex-wrap max-w-6xl mx-auto">
          <div className="item flex w-96 flex-col justify-center items-center       text-center py-8 border px-3 hover:bg-gray-200  transition">
            <img
              src={image1}
              className="h-40 w-40 mb-3 rounded-xl object-cover"
              alt=""
            />
            <h1 className="text-3xl pb-1 "> Unique art</h1>
            <p className="text-lg  text-gray-400">
              Dont have the same boring house as everyone else. Create a sense
              of individuality by display art that represents your personal
              style and taste
            </p>
          </div>
          <div className="item flex w-96  flex-col justify-center items-center     text-center py-8 border px-3 hover:bg-gray-200  transition">
            <img
              src={image2}
              className="h-40 w-40 mb-3 rounded-xl object-cover"
              alt=""
            />
            <h1 className="text-3xl pb-1 "> Carefully Curated</h1>
            <p className="text-lg text-gray-400">
              {" "}
              We hand-select each artist, bringing you a trusted source of bold
              and expressive artworks to effortlessly transform your home
            </p>
          </div>
          <div className="item flex w-96 flex-col justify-center items-center     text-center py-8 border px-3 hover:bg-gray-200  transition">
            <img
              src={image3}
              className="h-40 w-40 mb-3 rounded-xl object-cover"
              alt=""
            />
            <h1 className="text-3xl pb-1 ">Backing Independent Artists</h1>
            <p className="text-lg text-gray-400">
              Run by creatives for creatives, we have a passion to champion and
              financially empower underrepresented artists
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

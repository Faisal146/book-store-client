import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/21-books-GQ-April-2018-041718-3x2.webp";
import img2 from "../../assets/best-of-2019.png";
import img3 from "../../assets/great-books-for-anytime-2000jpg.jpg";
import bg1 from "../../assets/flower-background.jpg";
import bg2 from "../../assets/cloud-bg.avif";

// import banner2 from "../../assets/istockphoto-1190200652-612x612.jpg";
// import banner3 from "../../assets/tray-filled-paintbrushes-watercolor-palettes-260nw-2470175785.jpg";
import { Link } from "react-router-dom";

const Slide = () => {
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <div
              style={{
                background: `linear-gradient(to right,rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3)) , url(${bg1})`,
              }}
            >
              <div
                style={{ height: "calc(100vh - 70px)", maxHeight: " 700px" }}
                className=" max-w-6xl mx-auto px-2  flex items-center gap-10"
              >
                <div>
                  <h1 className="text-5xl title pb-6">
                    {" "}
                    Discover Your Next Adventure
                  </h1>
                  <p className="text text-xl">
                    Step into a world of endless possibilities at Moonlight book
                    shop! Whether you're a fan of thrilling mysteries,
                    heartwarming romances, or thought-provoking non-fiction, we
                    have the perfect book waiting for you. Our carefully curated
                    collection ensures there's something for every reader.
                  </p>
                  <Link to="/books" className="btn btn-primary mt-8">
                    Buy Now
                  </Link>
                </div>
                <img
                  src={img2}
                  style={{ height: "calc(100vh - 200px)", maxHeight: "500px" }}
                  className="w-1/2 object-cover rounded-2xl"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                background: `linear-gradient(to right,rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3)) , url(${bg2}) no-repeat center/cover`,
              }}
            >
              <div
                style={{ height: "calc(100vh - 70px)", maxHeight: " 700px" }}
                className=" max-w-6xl mx-auto px-2  flex items-center gap-10"
              >
                <div>
                  <h1 className="text-5xl title pb-6">
                    {" "}
                    A Haven for Book Lovers
                  </h1>
                  <p className="text text-xl">
                    Welcome to Moonlight book shop, where every page tells a
                    story and every shelf holds a treasure. From timeless
                    classics to the latest bestsellers, our cozy bookshop is a
                    paradise for readers of all ages. Join our community of book
                    lovers, attend our events, and immerse yourself in the magic
                    of reading.
                  </p>
                  <button className="btn btn-primary mt-8">Buy Now</button>
                </div>
                <img
                  src={img3}
                  style={{ height: "calc(100vh - 200px)", maxHeight: "500px" }}
                  className="w-1/2 object-cover rounded-2xl"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                background: `linear-gradient(to right,rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3)) , url(${bg1})`,
              }}
            >
              <div
                style={{ height: "calc(100vh - 70px)", maxHeight: " 700px" }}
                className=" max-w-6xl mx-auto px-2  flex items-center gap-10"
              >
                <div>
                  <h1 className="text-5xl title pb-6">
                    {" "}
                    Books That Inspire, Stories That Stay
                  </h1>
                  <p className="text text-xl">
                    Explore our diverse collection of books, handpicked to
                    ignite your imagination and touch your heart. Whether you're
                    here for a quick escape or a deep dive into a new topic,
                    we're here to help you find the perfect read. Let's turn the
                    page together!
                  </p>
                  <button className="btn btn-primary mt-8">Buy Now</button>
                </div>
                <img
                  src={img1}
                  style={{ height: "calc(100vh - 200px)", maxHeight: "500px" }}
                  className="w-1/2 object-cover rounded-2xl"
                  alt=""
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Slide;

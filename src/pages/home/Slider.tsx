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

const content = [
  {
    background: bg1,
    image: img1,
    title: "Discover Your Next Adventure",
    text: `Step into a world of endless possibilities at Moonlight book
      shop! Whether you're a fan of thrilling mysteries,
      heartwarming romances, or thought-provoking non-fiction, we
      have the perfect book waiting for you. Our carefully curated
      collection ensures there's something for every reader.`,
  },
  {
    background: bg2,
    image: img2,

    title: "   A Haven for Book Lovers",
    text: `   Welcome to Moonlight book shop, where every page tells a
          story and every shelf holds a treasure. From timeless
          classics to the latest bestsellers, our cozy bookshop is a
          paradise for readers of all ages. Join our community of book
          lovers, attend our events, and immerse yourself in the magic
          of reading.`,
  },
  {
    background: bg1,
    image: img3,

    title: "ooks That Inspire, Stories That Stay",
    text: ` Explore our diverse collection of books, handpicked to
          ignite your imagination and touch your heart. Whether you're
          here for a quick escape or a deep dive into a new topic,
          we're here to help you find the perfect read. Let's turn the
          page together!`,
  },
];

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
          {content.map((item: any) => (
            <div>
              <div
                style={{
                  background: `linear-gradient(to right,rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3)) , url(${item.background})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div
                  style={{ height: "calc(100vh - 70px)", maxHeight: " 700px" }}
                  className=" max-w-6xl mx-auto px-4 flex md:flex-row flex-col-reverse justify-center items-center gap-10"
                >
                  <div className="text-center md:text-left">
                    <h1 className="md:text-5xl text-3xl title pb-6">
                      {item.title}
                    </h1>
                    <p className="text  md:text-xl text-md">{item.text}</p>
                    <Link to="/books" className="btn btn-primary mt-8">
                      Buy Now
                    </Link>
                  </div>
                  <img
                    src={item.image}
                    style={{ maxHeight: "500px" }}
                    className="w-5/6 md:w-1/2 object-cover rounded-2xl "
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;

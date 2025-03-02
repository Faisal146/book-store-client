import { Link } from "react-router-dom";

import Fiction from "../../assets/Fiction.png";
import Story from "../../assets/Story.webp";
import Romantic from "../../assets/Romantic.avif";
import Science from "../../assets/Science.webp";
import Poetry from "../../assets/Poetry.jpg";
import Religious from "../../assets/Religious.jpeg";

const Categories = () => {
  const images = [Fiction, Story, Romantic, Science, Poetry, Religious];
  const bgColor = [
    "bg-amber-200",
    "bg-red-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-orange-200",
    "bg-cyan-200",
  ];
  const categoryes = [
    "Fiction",
    "Story",
    "Romantic",
    "Science",
    "Poetry",
    "Religious",
  ];

  return (
    <div>
      <div className="my-12  max-w-6xl mx-auto ">
        <div className="items flex  justify-center flex-wrap">
          {categoryes.map((item, index) => (
            <Link
              to={`/books/${item}`}
              className={`item   w-96  ${bgColor[index]} text-center p-2 `}
            >
              <div className="flex flex-col justify-center items-center  rounded-2xl py-8 border border-gray-300 px-3 hover:bg-gray-200   transition">
                <img
                  src={images[index]}
                  className="h-32 w-40 mb-3 rounded-xl object-cover"
                  alt=""
                />
                <h1 className="text-3xl pb-1 text "> {item}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

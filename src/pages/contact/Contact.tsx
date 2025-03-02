import React, { useState } from "react";
import { FaEnvelope, FaMapLocation, FaPhone } from "react-icons/fa6";

import img from "../../assets/pckk4xhg.png";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <div
        className="bg-base-200 py-16 my-10 text-center "
        style={{
          background: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <h1 className="text-4xl text-center">Get in touch</h1>
      </div>

      <div className="max-w-6xl container mx-auto p-4 mb-8">
        <h2 className="text-3xl font-bold text-center mb-8">Contact info</h2>

        <div className="flex flex-wrap md:flex-row flex-col justify-center">
          <div className="md:w-1/4 w-full  p-1">
            <div className="h-42   border-2 border-cyan-300 rounded-2xl flex items-center justify-center flex-col">
              <FaMapLocation className="text-4xl"></FaMapLocation>
              <h1 className="text-xl mt-4">Address:</h1>
              <p>Pabna, Bangladesh</p>
            </div>
          </div>
          <div className="md:w-1/4 w-full p-1">
            <div className="h-42  border-2 border-amber-300 rounded-2xl flex items-center justify-center flex-col">
              <FaPhone className="text-4xl"></FaPhone>
              <h1 className="text-xl mt-4">Call Us:</h1>
              <p>
                <a href="tel:01538391381">01538391381</a>
              </p>
            </div>
          </div>
          <div className="md:w-1/4 w-full p-1">
            <div className="h-42  border-2 border-pink-300 rounded-2xl flex items-center justify-center flex-col">
              <FaEnvelope className="text-4xl"></FaEnvelope>
              <h1 className="text-xl mt-4">Email:</h1>
              <p>help@moonlight.com</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-8 pt-12">
          Shere your thoughts
        </h2>

        <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input input-bordered w-full"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input input-bordered w-full"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="label">
              <span className="label-text">Your Message</span>
            </label>
            <textarea
              id="message"
              name="message"
              className="textarea textarea-bordered w-full"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import moon from "../../assets/moonLogo.svg";
import { useRegisterMutation } from "../../redux/features/auth/authApi";
import Swal from "sweetalert2";
import { FaPaperPlane } from "react-icons/fa";
import img from "../../assets/best-of-2019.png";
import { FaUser } from "react-icons/fa6";

const Registration = () => {
  const [passShow, setPassShow] = useState(false);
  const [passShow2, setPassShow2] = useState(false);

  const [register] = useRegisterMutation();

  const navigate = useNavigate();

  const [file, setFile] = useState(null);

  // Handle file input change
  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Get the first file
  };

  const handleRegeister = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const repassword = e.target.rePassword.value;

    console.log(email, password, name);
    // console.log("file is =>", file);

    if (file) {
      console.log("File selected:", file);
      // You can also upload the file to a server here if needed
    } else {
      console.log("No file selected");
    }

    if (repassword !== password) {
      Swal.fire({
        icon: "error",
        title: "Repeat password didn't match",

        // icon: 'success',
        //    showConfirmButton: false,
        confirmButtonText: "Ok",
      });
    } else {
      Swal.fire({
        title: "Signing Up!",
        text: "Please wait a while",
        // icon: 'success',
        showConfirmButton: false,
        //  confirmButtonText: 'Cool'
      });

      try {
        const userInfo = {
          name,
          email,
          password,
        };

        formData.append("data", JSON.stringify(userInfo));
        if (file) {
          formData.append("file", file);
        }

        const res = await register(formData).unwrap();
        console.log(res);

        Swal.fire({
          icon: "success",
          title: "Registration Completed",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate(`/login`);

        // navigate(`/${user.role}/dashboard`);
      } catch (err) {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
        });
      }
    }
  };

  return (
    <div className="flex " style={{ height: "100vh" }}>
      <div
        className="left w-1/2 md:block hidden"
        style={{
          background: `url(${img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="right md:w-1/2 w-full p-5 md:p-10 self-center">
        <img src={moon} className="w-12 mx-auto" alt="" />
        <h1 className="text-4xl text-center mb-7 font-bold">Sign Up</h1>
        <form
          onSubmit={() => handleRegeister(event)}
          className="flex items-center flex-col"
        >
          <label className="input w-96 input-bordered flex items-center gap-2  my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Your name"
              name="name"
              required
            />
          </label>
          <label className="input  w-96  input-bordered flex items-center gap-2 my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              className="grow"
              placeholder="Email"
              name="email"
              required
            />
          </label>

          <label className="input w-96 input-bordered flex items-center gap-2  my-3 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <div className="">
              <input
                name="password"
                className="grow"
                placeholder="Password"
                type={passShow ? "text" : "password"}
                required
              />
              <span
                className="showBtn absolute top-4 text-xl right-5"
                onClick={() => setPassShow(!passShow)}
              >
                {/* {passShow ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>} */}
              </span>
            </div>
          </label>
          <label className="input w-96 input-bordered flex items-center gap-2  my-3 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <div className="">
              <input
                name="rePassword"
                className="grow"
                placeholder="Re-Type Password"
                type={passShow2 ? "text" : "password"}
                required
              />
              <span
                className="showBtn absolute top-4 text-xl right-5"
                onClick={() => setPassShow2(!passShow2)}
              >
                {/* {passShow ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>} */}
              </span>
            </div>
          </label>
          <label className="input input-bordered flex items-center gap-2 my-3 w-96">
            <FaUser className="h-4 w-4 opacity-70"></FaUser>
            <input
              type="file"
              name="file"
              onChange={handleFileChange}
              className="file-input grow"
            />
          </label>

          <button type="submit" className="btn  w-96  btn-accent mt-5">
            <FaPaperPlane></FaPaperPlane>
            Sign Up{" "}
          </button>
        </form>

        <div className="massage text-center mt-5">
          <p>
            Already Have a account ?{" "}
            <Link className="underline" to="/login">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;

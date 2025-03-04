import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import moon from "../../assets/moonLogo.svg";
import img from "../../assets/great-books-for-anytime-2000jpg.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { verifyToken } from "../../utils/varifyToken";
import { useAppDispatch } from "../../redux/hook";
import Swal from "sweetalert2";

import { setUser } from "../../redux/features/auth/authSlice";

const Login = () => {
  const [passShow, setPassShow] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation(undefined);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    Swal.fire({
      title: "Logging In!",
      text: "Please wait a while",
      // icon: 'success',
      showConfirmButton: false,
      //  confirmButtonText: 'Cool'
    });

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const userInfo = {
        email,
        password,
      };
      const res = await login(userInfo).unwrap();
      console.log(res);
      const user = verifyToken(res.data);
      dispatch(setUser({ user: user, token: res.data }));

      Swal.fire({
        icon: "success",
        title: "Your are Logged In",
        showConfirmButton: false,
        timer: 1500,
      });

      if (user.role === "admin") {
        navigate(`/admin`);
      } else {
        navigate(`/`);
      }
      // navigate(`/${user.role}/dashboard`);
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Crediential Didn't match",
      });
    }
  };

  return (
    <div className="flex " style={{ height: "100vh " }}>
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
        <h1 className="text-4xl text-center mb-7 font-bold">Log In.</h1>
        <form
          action="#"
          className="flex items-center flex-col"
          onSubmit={() => handleLogin(event)}
        >
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
                placeholder="*******"
                type={passShow ? "text" : "password"}
                required
              />
              <span
                className="showBtn absolute top-2 cursor-pointer text-xl right-5"
                onClick={() => setPassShow(!passShow)}
              >
                {passShow ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
            </div>
          </label>

          <button type="submit" className="btn  w-96  btn-accent mt-5">
            {" "}
            Log in{" "}
          </button>
        </form>

        <div className="massage text-center mt-5">
          <p>
            Donot Have any account ?{" "}
            <Link className="underline" to="/register">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Container from "../components/Container";
import { motion } from "framer-motion";
import { login } from "../redux/slice/authSlice";

const Login = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  // Handles input changes for login form fields.
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = () => {
    dispatch(login(data));
    if (isLoggedIn) {
      navigate("/");
    } else navigate("/login");
  };

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center min-h-screen text-gray-900 bg-gray-100"
      >
        <div className="flex justify-center flex-1 max-w-screen-xl m-0 bg-white shadow sm:m-10 sm:rounded-lg">
          <div className="p-6 lg:w-1/2 xl:w-5/12 sm:p-12">
            <div className="flex flex-col items-center mt-5">
              <h1 className="text-2xl font-extrabold xl:text-3xl ">Sign up</h1>
              <div className="flex-1 w-full mt-8">
                <div className="max-w-xs mx-auto">
                  <input
                    className="w-full px-8 py-4 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={data.email}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    className="w-full px-8 py-4 mt-5 text-sm font-medium text-black placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={data.password}
                    onChange={handleInputChange}
                    required
                  />
                  <button
                    className="flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out bg-indigo-500 rounded-lg hover:bg-indigo-700 focus:shadow-outline focus:outline-none "
                    onClick={handleSubmit}
                  >
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Sign Up</span>
                  </button>
                  <p className="mt-6 text-xs text-center text-gray-600">
                    Don't have an account.{" "}
                    <Link to="/signup" className="text-blue-600">
                      Register here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 hidden text-center bg-indigo-100 lg:flex">
            <div
              className="w-full m-12 bg-center bg-no-repeat bg-contain xl:m-16 "
              // style="background-image: url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg');"
              style={{
                backgroundImage: `url("https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg") `,
              }}
            ></div>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default Login;

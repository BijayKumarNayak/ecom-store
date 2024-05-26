import React, { useEffect, useState } from "react";

import { FaCartShopping } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../redux/slice/productSlice";
import { motion } from "framer-motion";

import { logout } from "../redux/slice/authSlice";

const Navbar = () => {
  const numberOfCartProduct = useSelector(
    (state) => state.cartProducts.cart.length
  );
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const [searchedTerm, setSearchedTerm] = useState("");
  const [show, setShow] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const handleSearch = () => {
    dispatch(filterProducts(searchedTerm));
  };
  useEffect(() => {
    handleSearch();
  }, [searchedTerm]);
  return (
    <nav className="z-50 w-full bg-gray-800 position-fixed ">
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-lg font-bold text-white ">
              <span className="text-red-400">E</span>com{" "}
              <span className="text-red-400">S</span>tore
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center px-3 py-2 bg-white rounded-md ">
              <input
                type="text"
                placeholder="Search products"
                className="focus:outline-none"
                onChange={(e) => setSearchedTerm(e.target.value)}
                value={searchedTerm}
              />
              <FaSearch />
            </div>
          </div>

          <div className="flex items-center gap-1 md:gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hidden md:block lg:block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:scale-125 duration-150 ${
                  isActive ? "text-orange-600" : "text-white"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `hidden md:block lg:block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:scale-125 duration-150 ${
                  isActive ? "text-orange-600" : "text-white"
                }`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hidden md:block lg:block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:scale-125 duration-150 ${
                  isActive ? "text-orange-600" : "text-white"
                }`
              }
            >
              Contact Us
            </NavLink>

            {isLoggedIn ? (
              <button
                className="hidden px-3 py-2 text-sm font-medium text-white bg-red-600 rounded-md md:block lg:block hover:bg-red-700 "
                onClick={() => dispatch(logout())}
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="hidden px-3 py-2 text-sm font-medium text-gray-300 rounded-md md:block lg:block hover:bg-gray-700 hover:text-white"
              >
                <button>Sign In</button>
              </Link>
            )}

            <FaSearch
              className="mr-4 text-lg text-white md:hidden"
              onClick={() => setShowSearchBox(!showSearchBox)}
            />
            <div className="relative ">
              <NavLink to="/cart" className="px-3 font-medium text-gray-300 ">
                <FaCartShopping className="text-2xl" />
              </NavLink>
              <div className="absolute w-6 h-6 text-center text-white bg-red-500 rounded-full top-2 left-4 ">
                {numberOfCartProduct}
              </div>
            </div>

            <IoMenu
              className="ml-5 text-2xl text-white md:hidden lg:hidden"
              onClick={() => setShow(!show)}
            />
          </div>
        </div>
      </div>
      {show && (
        <motion.div
          initial={{ x: 150 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.3, type: "spring" }}
          className="absolute right-0 flex flex-col items-center py-2 bg-gray-800 "
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:scale-125 duration-150 ${
                isActive ? "text-orange-600" : "text-white"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:scale-125 duration-150 ${
                isActive ? "text-orange-600" : "text-white"
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:scale-125 duration-150 ${
                isActive ? "text-orange-600" : "text-white"
              }`
            }
          >
            Contact Us
          </NavLink>

          <Link
            to="/login"
            className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
          >
            <button>Sign In</button>
          </Link>
        </motion.div>
      )}

      {showSearchBox && (
        <div className="flex items-center px-3 py-2 bg-white rounded-md md:block">
          <input
            type="text"
            placeholder="Search products"
            className="focus:outline-none"
            onChange={(e) => setSearchedTerm(e.target.value)}
            value={searchedTerm}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";

import { FaCartShopping } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import logo from "../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../redux/slice/productSlice";
import { motion } from "framer-motion";
import { FaOpencart } from "react-icons/fa";
import { logout } from "../redux/slice/authSlice";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { IoMdSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const numberOfCartProduct = useSelector(
    (state) => state.cartProducts.cart.length
  );
  const placeholders = [
    "Search For Beauty Products",
    "Search For Electronics",
    "Search For Fashion",
    "Search For Home Appliances",
    "Search For Fragrances",
  ];
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
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);
  return (
    <nav className="z-50 w-full px-3 bg-slate-100 position-fixed md:px-8 lg:px-12 ">
      <div className="relative mx-auto max-w-7xl ">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="" className="w-20 h-20" />
            </Link>
          </div>
          <div className="hidden md:block">
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={(e) => setSearchedTerm(e.target.value)}
              value={searchedTerm}
            />
          </div>

          <div className="flex items-center md:gap-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hidden md:block  text-base font-medium hover:text-gray-600  ${
                  isActive ? "text-orange-600" : "text-gray-700"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `hidden md:block lg:block   text-base font-medium hover:text-gray-600  ${
                  isActive ? "text-orange-600" : "text-gray-700"
                }`
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hidden md:block lg:block  text-base font-medium hover:text-gray-600  ${
                  isActive ? "text-orange-600" : "text-gray-700"
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
                className="hidden text-base font-medium text-gray-700 md:block lg:block hover:text-gray-600 "
              >
                Sign In
              </Link>
            )}

            <FaSearch
              className="mr-4 text-lg text-gray-700 md:hidden"
              onClick={() => setShowSearchBox(!showSearchBox)}
            />
            <Link to="/login" className="mr-4 md:hidden lg:hidden">
              <FaUser className="text-lg text-gray-700 " />
            </Link>
            <div className="relative ">
              <NavLink to="/cart" className="px-3 font-medium text-gray-300 ">
                <FaCartShopping className="text-2xl text-gray-700" />
              </NavLink>
              <div></div>
              <div className="absolute w-4 h-4 text-center text-white bg-red-500 rounded-full top-3 left-4 ">
                <p className="text-xs"> {numberOfCartProduct}</p>
              </div>
            </div>

            <IoMenu
              className="ml-5 text-2xl text-gray-700 md:hidden lg:hidden"
              onClick={() => setShow(!show)}
            />
          </div>
        </div>
      </div>
      {/* ======== Mobile Menu ============== */}
      {show && (
        <div className="fixed top-0 bottom-0 right-0 w-full overflow-hidden transition-all bg-white md:hidden">
          <MdCancel
            className="fixed text-2xl top-5 right-5 "
            onClick={() => setShow(false)}
          />
          <ul className="flex flex-col items-center gap-2 px-5 mt-20 text-lg font-medium">
            <li>
              <NavLink
                to="/"
                onClick={() => setShow(false)}
                className="inline-block px-4 py-2 rounded-full"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                onClick={() => setShow(false)}
                className="inline-block px-4 py-2 rounded-full"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={() => setShow(false)}
                className="inline-block px-4 py-2 rounded-full"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      {showSearchBox && (
        <div>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={(e) => setSearchedTerm(e.target.value)}
            value={searchedTerm}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;

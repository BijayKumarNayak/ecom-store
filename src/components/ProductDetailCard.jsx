/* eslint-disable react/prop-types */
import React from "react";
import StarRating from "./StarRatrig";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice/cartSlice";
import { motion } from "framer-motion";
const ProductDetailCard = ({ data }) => {
  const { title, price, category, thumbnail, rating, id, description } = data;
  const dispatch = useDispatch();

  return (
    <div className="items-center w-2/3 max-w-sm m-auto border-gray-400 lg:max-w-full lg:flex">
      <div className="h-full ">
        <img src={thumbnail} alt="" className="h-full m-2 " />
      </div>

      <div className="flex flex-col gap-2 p-4 leading-normal border-b border-l border-r rounded-b lg:border-l-0 lg:border-t lg:rounded-b-none lg:rounded-r">
        <div className="mb-2">
          <div className="mb-2 text-xl font-bold text-gray-900">{title}</div>
          <p className="text-base font-semibold text-gray-700">{description}</p>
        </div>
        <div className="flex items-center gap-3">
        <StarRating rating={rating} />
        </div>
        <p className="font-semibold">{category}</p>
        <h3 className="font-semibold">₹{price}</h3>

        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        type="button"
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-2 md:px-5 py-2.5 text-center me-2 mb-2 md:w-60 "
        onClick={() => dispatch(addToCart({data}))}
      >
        Add To Cart
      </motion.button>
      </div>
    </div>
  );
};

export default ProductDetailCard;

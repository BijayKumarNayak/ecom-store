/* eslint-disable react/prop-types */
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import StarRating from "./StarRatrig";

import { addToCart } from "../redux/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
const ProductCard = ( {productId} ) => {
  const product = useSelector((state) =>
    state.product.products.find((item) => item.id === productId)
  );
   const { title, price, category, thumbnail, rating, id, stock } = product;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const truncatedTitle =
    title.length > 100 ? title.substring(0, 100) + "..." : title;

  return (
    <div className="max-w-sm p-2 duration-150 bg-white border rounded-lg w-80 md:w-full hover:shadow-md hover:shadow-blue-700">
      <p className="inline-block px-3 py-1 font-semibold text-white border rounded-full bg-gradient-to-r from-rose-300 to-rose-400">
        {category}
      </p>
      <div
        className="p-2 cursor-pointer h-52"
        onClick={() => navigate(`/product-detail/${id}`)}
      >
        <img
          className="object-contain w-full h-full rounded-t-lg"
          src={thumbnail}
          alt=""
        />
      </div>
      <div className="p-2">
        <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 truncate ">
          {truncatedTitle}
        </h5>

        <StarRating rating={rating} />
        <p>{stock} Stocks Available</p>

        <h4 className="my-2 font-bold">₹{price}</h4>

        <button
          className="text-black  hover:bg-black hover:text-white   font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 border-2 border-black "
          onClick={() => dispatch(addToCart({ ...product, quantity }))}
        >
          Add To Cart
        </button>
      </div>
    </div>
   
  );
};

export default ProductCard;

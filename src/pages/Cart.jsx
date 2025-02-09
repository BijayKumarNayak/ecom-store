import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  selectTotalPrice,
} from "../redux/slice/cartSlice";
import emptyCartImg from "../images/shopping.png";
import Container from "../components/Container";
import { reduceStock } from "../redux/slice/productSlice";
import { motion } from "framer-motion";
const Cart = () => {
  const cartItems = useSelector((state) => state.cartProducts.cart);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();
  const handleDecrement = (product) => {
    dispatch(decrementQuantity(product));
    dispatch(reduceStock(product.id));
    console.log(product);
  };

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {cartItems.length > 0 ? (
          <ul>
            {cartItems?.map((product) => (
              <li
                key={product.id}
                className="grid items-center content-center justify-center gap-2 p-3 border md:h-40 md:grid-cols-5 md:gap-0"
              >
                <div className="h-full w-52 md:w-32 ">
                  <img
                    src={product.thumbnail}
                    alt=""
                    className="object-cover h-full"
                  />
                </div>
                <h3 className="font-semibold text-center">{product.title}</h3>
                <p className="font-bold text-center">
                  ₹{product.price * product.quantity}
                </p>
                <div className="flex items-center justify-center w-32 gap-2 m-auto border rounded-md">
                  <button
                    className={`w-10 h-10 text-2xl font-bold border rounded-md ${
                      product.quantity === 0
                        ? "bg-gray-300 cursor-not-allowed"
                        : ""
                    }`}
                    onClick={() => handleDecrement(product)}
                    disabled={product.quantity === 0}
                  >
                    -
                  </button>
                  <div className="flex items-center justify-center w-10 h-10 text-xl font-bold ">
                    {product.quantity}
                  </div>
                  <button
                    className="w-10 h-10 text-2xl font-bold border rounded-md "
                    onClick={() => dispatch(incrementQuantity(product))}
                  >
                    +
                  </button>
                </div>
                <button
                  className="px-3 py-2 font-semibold text-white bg-red-600 rounded-md lg:mx-10 "
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center justify-center h-screen">
            <img src={emptyCartImg} alt="" className="h-80 w-80" />
            <Link to="/products">
              <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Shop Now
              </button>
            </Link>
          </div>
        )}
        {cartItems.length > 0 ? (
          <div className="my-8 ml-auto mr-0 text-center border-2 w-60">
            <div className="grid grid-cols-2 ">
              <p>Total Quantity:</p>
              <p>{cartItems.length}</p>
            </div>
            <div className="grid grid-cols-2 ">
              <p>Total Price:</p>
              <p>₹{totalPrice.toFixed(2)}</p>
            </div>
          </div>
        ) : null}
      </motion.div>
    </Container>
  );
};

export default Cart;

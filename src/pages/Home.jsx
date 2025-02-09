import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { fetchData } from "../redux/slice/productSlice";
import Container from "../components/Container";
import home from "../images/home.jpg";
import cod from "../images/cash-on-delivery.png";
import fd from "../images/fast-delivery.png";
import cs from "../images/customer-service.png";
import { FlipWords } from "../components/ui/flip-words";
import { Button } from "../components/ui/moving-border";

import { motion } from "framer-motion";
const Home = () => {
  const words = ["Easy", "Sucure", "Pleasure", "Comfortable"];
  const AllProducts = useSelector((state) => state.product.filterProducts);

  // console.log(AllProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Container>
      <section id="home " className="relative w-full lg:px-16 md:px-10 ">

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative grid items-center min-h-screen grid-cols-1 mx-auto bg-white md:grid-cols-2 "
        >
          <div className="block w-full ">
            <div className="flex flex-col items-start gap-2 ">
              <p>EXPLORE THE LATEST IN INDUSTRIES</p>
              <h2 className="text-6xl font-bold ">
                Each purchase will  <br />be made with{" "} <br /> 
                <FlipWords words={words} />
              </h2>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                reprehenderit?
              </p>
              <Link to="/products" className="hover:text-gray-700">
                <Button
                  borderRadius="1.75rem"
                   className="text-black bg-white border-neutral-200 "
                >
                  Explore Our Products
                </Button>
              </Link>
            </div>
          </div>
          <motion.div
            initial={{ x: 350 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="relative w-full h-full p-2 "
          >
            <img src={home} alt="" className="object-contain w-full h-full" />
          </motion.div>
        </motion.div>
      </section>

      <section>
        <div className="flex items-center justify-center gap-2 md:gap-4">
          <div className="flex items-center gap-2 md:gap-3 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] md:p-3 p-2">
            <div className="h-16">
              <img
                src={fd}
                alt=""
                className="h-full duration-150 hover:scale-125"
              />
            </div>
            <h3 className="font-bold">Fast Delivery</h3>
          </div>
          <div className="flex items-center gap-2 md:gap-3  shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] md:p-3 p-2">
            <div className="h-16">
              <img
                src={cs}
                alt=""
                className="h-full duration-150 hover:scale-125"
              />
            </div>
            <h3 className="font-bold">24X7 Service</h3>
          </div>
          <div className="flex items-center gap-2 md:gap-3 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] md:p-3 p-2">
            <div className="h-16">
              <img
                src={cod}
                alt=""
                className="h-full duration-150 hover:scale-125"
              />
            </div>
            <h3 className="font-bold">Cash On Delivery</h3>
          </div>
        </div>
      </section>
      <section className="px-2 py-2 md:px-4">
        <div className="grid justify-center w-full gap-3 md:grid-cols-4">
          {AllProducts ? (
            AllProducts.map((product) => (
              <ProductCard key={product.id} productId={product.id} />
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </section>
    </Container>
  );
};

export default Home;

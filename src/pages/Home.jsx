import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import { fetchData } from "../redux/slice/productSlice";
import Container from "../components/Container";
import avatar from "../images/avatar.png"
import cod from "../images/cash-on-delivery.png"
import fd from "../images/fast-delivery.png"
import cs from "../images/customer-service.png"

import { motion } from "framer-motion";
const Home = () => {
  const AllProducts = useSelector((state) => state.product.filterProducts);

  // console.log(AllProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Container 
     
      
    >
      <section id="home " className="w-full ">
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}} className="flex flex-col items-center min-h-screen px-3 md:px-5 md:flex-row lg:flex-row bg-gradient-to-r from-red-400 via-pink-500 to-pink-400">
          <div className="w-full md:1/2 ">
            <div className="flex flex-col items-start gap-2 text-white ">
              <p>EXPLORE THE LATEST IN INDUSTRIES</p>
              <h2 className="text-4xl font-bold ">
                Each purchase will <br /> be made with pleasure.
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                reprehenderit?
              </p>
              <Link to="/products" className="hover:text-gray-700">
              <motion.button
              initial={{ x: -250 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="px-3 py-1 border-2 rounded-full"
            >
              Explore Our Products
            </motion.button>
              </Link>
             
            </div>
          </div>
          <motion.div
            initial={{ x: 350 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="relative w-full p-2 md:w-1/2 "
          >
            <img src={avatar} alt=""  />
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

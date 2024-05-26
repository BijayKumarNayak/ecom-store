import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";
import { motion } from "framer-motion";
const Products = () => {
  const AllProducts = useSelector((state) => state.product.filterProducts);
  return (
      <Container >
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}} className="grid justify-center gap-3 md:grid-cols-4 md:mx-3">
          {AllProducts ? (
            AllProducts.map((product) => (
              <ProductCard key={product.id} productId={product.id} />
            ))
          ) : (
            <div>Loading...</div>
          )}
        </motion.div>
      </Container> 
  );
};

export default Products;

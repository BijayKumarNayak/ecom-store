import React from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductDetailCard from "../components/ProductDetailCard";
import Container from "../components/Container";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const params = useParams();
  const { id } = params;
  // console.log(id);
  const selectProductById = (state, id) =>
    state.product.products.find((product) => product.id === id);
  const product = useSelector((state) =>
    selectProductById(state, parseInt(id))
  );

  return (
    <Container>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}} className="flex justify-center m-auto">
        <ProductDetailCard data={product} />
      </motion.div>
    </Container>
  );
};

export default ProductDetail;

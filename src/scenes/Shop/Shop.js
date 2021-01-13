import React, { useEffect, useState } from "react";
import ShoppingItem from "../../components/ShoppingItem";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { motion } from "framer-motion";
import { listProducts } from "../../actions/productActions";

const Shop = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  const { loading, error, products } = productList;

  console.log(products);
  console.log(productList);

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return (
    <>
      {loading ? (
        <h2>....Loading</h2>
      ) : error ? (
        <h3>Error</h3>
      ) : (
        <motion.div className="shop m-Container" exit={{ opacity: 0 }}>
          {/* {console.log(products)}; */}
          {products.map((product) => {
            return <ShoppingItem product={product}></ShoppingItem>;
          })}
        </motion.div>
      )}
    </>
  );
};

export default Shop;

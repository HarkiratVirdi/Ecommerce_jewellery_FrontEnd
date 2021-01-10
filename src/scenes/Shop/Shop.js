import React, { useEffect, useState } from "react";
import ShoppingItem from "../../components/ShoppingItem";
import axios from "axios";
import { motion } from "framer-motion";
const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <motion.div className="shop" exit={{ opacity: 0 }}>
      {/* {console.log(products)}; */}
      {products.map((product) => {
        return <ShoppingItem product={product}></ShoppingItem>;
      })}
    </motion.div>
  );
};

export default Shop;

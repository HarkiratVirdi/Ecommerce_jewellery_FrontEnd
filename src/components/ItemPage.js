import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { listProductDetails } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const ItemPage = ({ match }) => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);

  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, []);

  return (
    <motion.div className="item_page" exit={{ opacity: 0 }}>
      <div className="item_page__image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="item_page__content">
        <div className="item_page__content__name">
          <div className="heading-4 heading-4--white">{product.name}</div>
          <div className="mb-s ml-s heading-5 heading-5--white">{`$${product.price}`}</div>
        </div>
        <div className="heading-5 mt-m heading-5--white">
          <strong>Description</strong>
        </div>
        <div className="heading-5 mt-s heading-5--white">
          {product.description}
        </div>
        <div className="item_page_quantity mt-m">
          <div className="heading-5 heading-5--white">Quantity</div>
        </div>
        <Button style="btn btn--white mt-l">ADD TO CART</Button>
      </div>
    </motion.div>
  );
};

export default ItemPage;

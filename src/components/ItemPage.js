import React, { useEffect } from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { listProductDetails } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import SpinnerAbsolute from "./SpinnerAbsolute";
import Message from "./Message";
const ItemPage = ({ match }) => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);

  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match.params.id]);

  const addingToCart = () => {
    dispatch(addToCart(match.params.id, 1));
  };

  return (
    <motion.div className="item_page" exit={{ opacity: 0 }}>
      {loading && <SpinnerAbsolute />}
      {error && <Message>Please refresh the Page</Message>}
      <div className="item_page__image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="item_page__content">
        <div className="item_page__content__name">
          <div className="heading-4 heading-4--white">{product.name}</div>
          <div className="mb-s ml-s heading-5 heading-5--white">{`$${product.price}`}</div>
        </div>
        <div className="heading-4 mt-m heading-4--white">
          <strong>Description</strong>
        </div>
        <div className="heading-5 mt-s heading-5--white">
          {product.description}
        </div>
        {/* <div className="item_page_quantity mt-m">
          <div className="heading-5 heading-5--white">Quantity</div>
          <div className="item_page_qty_sel">
            <div className="item_page_qty_selectors">
              <p className="item_page_qty_label">
                (qty)
              </p>
              <p className="item_page_fake_sel">1</p>
              <img src="" alt=""/>
              <ul className="item_page_drawer">

              </ul>
            
            </div>
          </div>
        </div> */}
        <Button styling="btn btn--white mt-l" onClick={addingToCart}>
          ADD TO CART
        </Button>
      </div>
    </motion.div>
  );
};

export default ItemPage;

import React, { useEffect, useState } from "react";
import ShoppingItem from "../../components/ShoppingItem";
import axios from "axios";

export default function HomeFeatured() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      // console.log(data);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // console.log(products);

  const featured = products.filter((el) => el.featured === true);
  // console.log(featured);

  return (
    <section className="home_featured">
      <div className="mb-m home_featured_heading heading-3 heading-3--gold">
        Featured
      </div>
      <div className="home_featured_items">
        {featured.map((feature) => {
          return <ShoppingItem product={feature}></ShoppingItem>;
        })}
      </div>
    </section>
  );
}

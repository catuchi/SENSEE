import React from "react";

import { Product, FooterBanner, HeroBanner } from "../components";

const products = ["Product 1", "Product 2"];

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products.map((product) => product)}
      </div>
      <FooterBanner />
    </>
  );
};

export default Home;

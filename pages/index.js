import React from "react";

import { client } from "../lib/client";
import {
  FooterBanner,
  HeroBanner,
  ProductsCarousel,
  Catalog,
  DeliveryInfo,
  About,
  Contacts,
} from "../components";

const Home = ({ products, bannerData, footerData, aboutData, bestSellers }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData[0]} />
      <ProductsCarousel products={bestSellers || []} />
      <DeliveryInfo />
      <Catalog products={products || []} />
      <About data={aboutData[0]} />
      <Contacts />
      <FooterBanner footerBanner={footerData && footerData[0]} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bestSellerQuery = '*[_type == "bestSellers"]';
  const bestSellers = await client.fetch(bestSellerQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const footerQuery = '*[_type == "footer"]';
  const footerData = await client.fetch(footerQuery);

  const aboutQuery = '*[_type == "about"]';
  const aboutData = await client.fetch(aboutQuery);
  return {
    props: { products, bannerData, footerData, aboutData, bestSellers },
  };
};

export default Home;

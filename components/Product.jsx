import React from "react";
import Link from "next/link";
import Tilt from "react-vanilla-tilt";
import Image from "next/image";

import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price, oldPrice } }) => {
  return (
    <Tilt className="product-card-container">
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          {!!oldPrice && (
            <div className="product-card-sale-wrapper">
              <Image
                src="/sale.png"
                alt="flowers and bouquets for sale"
                width="74"
                height="74"
              />
            </div>
          )}
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </Tilt>
  );
};

export default Product;

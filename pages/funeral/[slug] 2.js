import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { client, urlFor } from "../../lib/client";
import { ProductsCarousel } from "../../components";
import { useStateContext } from "../../context/StateContext";

const ProductDetails = ({ product, bestSellers }) => {
  const {
    image,
    name,
    details,
    price,
    oldPrice,
    delivery,
    dimensions,
    includes,
  } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={urlFor(image && image[index])}
              className="product-detail-image"
              alt={name}
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                alt={name}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h2>{name}</h2>
          <h4>Details: </h4>
          <p>{details}</p>
          <h4>Delivery:</h4>
          <p>Next Day Delivery</p>
          {!!dimensions && (
            <>
              <h4>Approximate Dimensions: </h4>
              <p>{dimensions}</p>
            </>
          )}
          {!!includes && (
            <>
              <h4>Includes: </h4>
              <p>{includes}</p>
            </>
          )}
          <p className="price">
            {!!oldPrice && <span className="old-price">${oldPrice}</span>}$
            {price}
          </p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <ProductsCarousel products={bestSellers || []} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "funeral"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "funeral" && slug.current == '${slug}'][0]`;
  const bestSellerQuery = '*[_type == "bestSellers"]';

  const product = await client.fetch(query);
  const bestSellers = await client.fetch(bestSellerQuery);

  return {
    props: { bestSellers, product },
  };
};

export default ProductDetails;

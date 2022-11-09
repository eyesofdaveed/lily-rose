import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { urlFor } from "../lib/client";

const ProductsCarousel = ({ products }) => {
  return (
    <div className="products-heading">
      <h2>Best Sellers</h2>
      <p>Flowers for any occasion</p>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product._id}>
            <div>
              <Link href={`/bestSellers/${product.slug.current}`}>
                <div className="carousel-product">
                  <img
                    src={urlFor(product.image && product.image[0])}
                    width={250}
                    height={250}
                    className="carousel-image"
                    alt={product.name}
                  />
                  <p style={{ fontWeight: "500" }} className="product-name">
                    {product.name}
                  </p>
                  <p
                    style={{
                      fontWeight: "500",
                      marginTop: "6px",
                      color: "black",
                    }}
                    className="product-price"
                  >
                    ${product.price}
                  </p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsCarousel;

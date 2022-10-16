import React from "react";
import Image from "next/image";

const DeliveryInfo = () => {
  return (
    <div className="delivery-info-container">
      <div className="delivery-info-item">
        <Image
          src="/fresh-flowers.png"
          alt="Lily-Rose Flowers Delivery Sunnyvale California"
          width="64"
          height="64"
        />
        <p>Fresh handpicked flowers</p>
      </div>
      <div className="delivery-info-item">
        <Image
          src="/free-postcard.png"
          alt="Lily-Rose Flowers Delivery Sunnyvale Bay Area"
          width="64"
          height="64"
        />
        <p>Free postcards with love</p>
      </div>
      <div className="delivery-info-item">
        <Image
          src="/free-delivery.png"
          alt="Lily-Rose Flowers Delivery Sunnyvale California"
          width="64"
          height="64"
        />
        <p>Convenient express delivery</p>
      </div>
      <span id="catalogUpper"></span>
    </div>
  );
};

export default DeliveryInfo;

import React from "react";
import Image from "next/image";

const DeliveryInfo = () => {
  return (
    <div className="delivery-info-container">
      <div className="delivery-info-item">
        <Image
          src="/fresh-flowers.png"
          alt="Lily-Rose Flowers"
          width="64"
          height="64"
        />
        <p>Every morning we handpick the fresh flowers</p>
      </div>
      <div className="delivery-info-item">
        <Image
          src="/free-postcard.png"
          alt="Lily-Rose Flowers"
          width="64"
          height="64"
        />
        <p>Nice postcard always good</p>
      </div>
      <div className="delivery-info-item">
        <Image
          src="/free-delivery.png"
          alt="Lily-Rose Flowers"
          width="64"
          height="64"
        />
        <p>Free delivery around Sunnyvale</p>
      </div>
    </div>
  );
};

export default DeliveryInfo;

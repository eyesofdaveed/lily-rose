import React from "react";

import { client } from "../lib/client";
import Product from "../components/Product";

const Funeral = ({ funeralFlowers }) => {
  console.log(funeralFlowers);
  return (
    <div className="funeral-wrapper">
      <div className="funeral-top-container">
        <h1>Funeral Flowers</h1>
        <p>
          Order beautiful memorial flowers from Lily-Rose Flowers Bay Area, to
          send your condolences with quality floral arrangements for funerals.
          We can create a standing floral spray, bouquet, or wreath that is
          guaranteed to help celebrate the life of your loved one. Let us take
          some stress out of this time of mourning and let you focus on their
          memory. Funeral flowers from Lily-Rose will convey your sincerest
          condolences with an exceptional floral display. For a funeral home or
          church service, a standing floral spray or basket of sympathy flowers
          will express your compassion beautifully. Or, send a sympathy bouquet
          in a vase for long-lasting comfort.
        </p>
      </div>
      <h1 className="category-filter-label">Funeral</h1>
      <div className="products-container">
        {funeralFlowers?.map((flower) => {
          return <Product key={flower._id} product={flower} isFuneral={true} />;
        })}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const query = '*[_type == "funeral"]';
  const funeralFlowers = await client.fetch(query);

  return {
    props: { funeralFlowers },
  };
};

export default Funeral;

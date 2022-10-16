import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import product from "./product";
import banner from "./banner";
import footer from "./footer";
import bestSellers from "./bestSellers";
import about from "./about";
import services from "./services";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    product,
    banner,
    footer,
    bestSellers,
    about,
    services,
  ]),
});

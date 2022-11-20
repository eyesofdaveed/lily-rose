export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug, Fill this out(Unikalnim doljen byt)***",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "oldPrice",
      title: "Old Price",
      type: "number",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },
    {
      name: "delivery",
      title: "Delivery",
      type: "string",
    },
    {
      name: "dimensions",
      title: "Dimensions",
      type: "string",
    },
    {
      name: "includes",
      title: "Includes",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Bouquets", value: "bouquets" },
          { title: "Flowers in basket", value: "basket" },
          { title: "Flowers in box", value: "boxes" },
          { title: "Gifts", value: "gifts" },
          { label: "Marriage proposal", value: "proposals" },
          { title: "Roses", value: "roses" },
          { title: "Vase arrangements", value: "vases" },
          { label: "Wedding flowers", value: "weddings" },
        ],
      },
    },
  ],
};

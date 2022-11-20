export default {
  name: "about",
  title: "About",
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
      name: "greeting",
      title: "Greeting text",
      type: "string",
    },
    {
      name: "heading",
      title: "Main text",
      type: "string",
    },
    {
      name: "desc",
      title: "Description",
      type: "string",
    },
  ],
};

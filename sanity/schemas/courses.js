export default {
  name: "courses",
  title: "Courses",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "duration",
      title: "Duration",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "string",
    },
  ],
};

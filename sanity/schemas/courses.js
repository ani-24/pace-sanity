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
      name: "fascilities",
      title: "Fascilities",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "description",
      title: "Description",
      type: "string",
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

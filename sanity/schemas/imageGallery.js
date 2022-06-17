export default {
  name: "imageGallery",
  title: "Image Gallery",
  type: "document",
  fields: [
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};

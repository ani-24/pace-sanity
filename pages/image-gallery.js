import { client } from "../lib/client";

const ImageGallery = ({ images }) => {
  console.log(images);
  return <div>ImageGallery</div>;
};

export default ImageGallery;

export const getServerSideProps = async () => {
  const images = await client.fetch(`*[_type == "imageGallery"]`);
  return {
    props: {
      images,
    },
  };
};

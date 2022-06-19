import { client } from "../lib/client";
import { urlFor } from "../lib/client";

const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <div className="image-gallery">
      <div className="gallery-inner">
        {images.map((el, index) => {
          return (
            <div className="image-gallery__item">
              <img
                className="image-gallery__item__img"
                key={el._key}
                src={urlFor(el.asset._ref)}
                alt={el.alt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;

export const getServerSideProps = async () => {
  const images = await client.fetch(`*[_type == "imageGallery"]`);
  return {
    props: {
      images: images[0].images,
    },
  };
};

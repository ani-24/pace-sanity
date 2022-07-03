import React, { useState } from "react";
import { client, urlFor } from "../lib/client";

import { LightBox } from "react-lightbox-pack";
import "react-lightbox-pack/dist/index.css";

const ImageGallery = ({ images }) => {
  const [toggle, setToggle] = useState(false);
  const [sIndex, setSIndex] = useState(0);

  // Handler
  const lightBoxHandler = (state, sIndex) => {
    setToggle(state);
    setSIndex(sIndex);
  };
  const data = [];
  images.forEach((el) => {
    data.push({ image: urlFor(el.asset._ref) });
  });
  return (
    <div className="image-gallery">
      <div className="gallery-inner">
        {images.map((el, index) => {
          return (
            <div className="image-gallery__item" key={el._key}>
              <img
                className="image-gallery__item__img"
                src={urlFor(el.asset._ref)}
                alt={el.alt}
                onClick={() => {
                  lightBoxHandler(true, index);
                }}
              />
            </div>
          );
        })}
      </div>
      <LightBox
        state={toggle}
        event={lightBoxHandler}
        data={data}
        imageWidth="60vw"
        imageHeight="70vh"
        thumbnailHeight={50}
        thumbnailWidth={50}
        setImageIndex={setSIndex}
        imageIndex={sIndex}
      />
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

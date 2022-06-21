import { client } from "../lib/client";
import { urlFor } from "../lib/client";

const lightbox = (images, idx) => {
  let currentIdx = idx;
  const overlay = document.querySelector(".overlay");
  overlay.classList.remove("hide");
  const modal = document.createElement("div");
  modal.classList.add("modal", "lightbox");
  modal.innerHTML = `
    <i class="fas fa-circle-chevron-left fa-2x slide-btn prev-btn"></i>
    <img class="current-img" src=${urlFor(images[idx].asset._ref)} alt=${
    images[idx].alt
  } style="max-height: 80%; max-width: 80%;" />
    <i class="fas fa-circle-chevron-right fa-2x slide-btn next-btn"></i>
  `;
  document.body.appendChild(modal);
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const changeImg = () => {
    const currentImg = modal.querySelector("img");
    currentImg.src = urlFor(images[currentIdx].asset._ref);
  };
  prevBtn.addEventListener("click", () => {
    currentIdx -= 1;
    if (currentIdx < 0) {
      currentIdx = images.length - 1;
    }
    changeImg();
  });
  nextBtn.addEventListener("click", () => {
    currentIdx += 1;
    if (currentIdx >= images.length) {
      currentIdx = 0;
    }
    changeImg();
  });
  modal.addEventListener("click", (e) => {
    if (
      !e.target.classList.contains("current-img") &&
      !e.target.classList.contains("slide-btn")
    ) {
      overlay.classList.add("hide");
      modal.classList.add("hide");
      setTimeout(() => {
        document.body.removeChild(modal);
      }, 750);
    }
    console.log(e.target);
  });
};

const ImageGallery = ({ images }) => {
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
                  lightbox(images, index);
                }}
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

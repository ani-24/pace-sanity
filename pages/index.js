import { client } from "../lib/client";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

// import modal
import openModal from "./../components/Modal";

const HeroSection = ({ title, description, buttonText }) => {
  return (
    <div className="hero-section">
      <div className="hero-section-inner">
        <div className="hero-section__img">
          <img src="./pratap_manish.webp" alt="Pratap Manish" />
        </div>
        <div className="hero-section__content">
          <h1 className="hero-section__content__title">{title}</h1>
          <p>{description}</p>
          <Link href="/">
            <a className="hero-section__content__btn">
              <i className="fa-regular fa-circle-play"></i> {buttonText}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const IntroToMentor = () => {
  return (
    <section className="video-section">
      <div className="section-inner">
        <h3 className="section-heading">Learn from the BEST</h3>
        <video src="./intro-to-mentor.mp4" controls></video>
      </div>
    </section>
  );
};

const DemoLectures = ({ videos }) => {
  return (
    <>
      <section className="demo-section">
        <div className="section-inner">
          <h3 className="section-heading">Demo Lectures</h3>
          <div className="demo-lectures">
            {videos.map((video, index) => (
              <div className="item" key={video._id}>
                <div
                  className="item__video-poster"
                  onClick={() => openModal(video.videoId.split("/")[3])}
                >
                  <img
                    src={`https://i.ytimg.com/vi/${
                      video.videoId.split("/")[3]
                    }/hqdefault.jpg`}
                  />
                  <i className="fa-solid fa-circle-play fa-2x play-icon"></i>
                </div>
                <p className="video-description">{video.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const Testimonial = ({ testimonial }) => {
  return (
    <section className="testimonial">
      <div className="section-inner">
        <div className="section-heading">
          <h3 className="section-heading">Feedback from Students</h3>
        </div>
        <Swiper
          slidesPerView={1}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="testimonial-slider"
        >
          {testimonial.map((el, index) => {
            console.log(el._id);
            return (
              <SwiperSlide key={el._id}>
                <h3 className="slider-heading">{el.person}</h3>
                <p className="slider-body">{el.feedback}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default function Home({ videos, banner, testimonial }) {
  return (
    <>
      <HeroSection
        title={banner[0].title}
        description={banner[0].description}
        buttonText={banner[0].buttonText}
      />
      <IntroToMentor />
      <DemoLectures videos={videos} />
      <Testimonial testimonial={testimonial} />
    </>
  );
}

export async function getServerSideProps() {
  const videos = await client.fetch(`*[_type == "demo"]`);
  const banner = await client.fetch(`*[_type == "banner"]`);
  const testimonial = await client.fetch(`*[_type == "testimonial"]`);
  return {
    props: {
      videos,
      banner,
      testimonial,
    },
  };
}

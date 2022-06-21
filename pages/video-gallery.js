import { client } from "../lib/client";

import openModal from "../components/Modal";

const VideoGallery = ({ videos }) => {
  console.log(videos);
  return (
    <section>
      <div className="section-inner">
        <div className="video-gallery">
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
  );
};

export default VideoGallery;

export const getServerSideProps = async () => {
  const videos = await client.fetch(`*[_type == "videoGallery"]`);
  return {
    props: {
      videos,
    },
  };
};

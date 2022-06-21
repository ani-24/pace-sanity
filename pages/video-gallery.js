import { client } from "../lib/client";

const VideoGallery = ({ videos }) => {
  console.log(videos);
  return <div>VideoGallery</div>;
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

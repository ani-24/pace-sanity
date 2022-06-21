import { client } from "../lib/client";

const AboutPace = ({ sections }) => {
  console.log(sections);
  return <div>AboutPace</div>;
};

export default AboutPace;

export const getServerSideProps = async () => {
  const sections = await client.fetch(`*[_type == "aboutPace"]`);
  return {
    props: {
      sections,
    },
  };
};

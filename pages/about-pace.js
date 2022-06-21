import { client } from "../lib/client";
import PortableText from "@sanity/block-content-to-react";

const AboutPace = ({ sections, mentor }) => {
  console.log(sections, mentor);
  return (
    <div>
      {sections.map((section, index) => {
        return (
          <section className="section about-section" key={section._id}>
            <h1 className="section-title">{section.title}</h1>
            <PortableText
              blocks={section.description}
              className="section-text"
            />
          </section>
        );
      })}
      <section className="section about-section">
        <h1 className="section-title">{mentor.title}</h1>
        <PortableText blocks={mentor.description} className="section-text" />
        <video src="./intro-to-mentor.mp4" controls></video>
      </section>
    </div>
  );
};

export default AboutPace;

export const getServerSideProps = async () => {
  const sections = await client.fetch(`*[_type == "aboutPace"]`);
  const mentor = await client.fetch(`*[_type == "aboutMentor"]`);
  return {
    props: {
      sections,
      mentor: mentor[0],
    },
  };
};

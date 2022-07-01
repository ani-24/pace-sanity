import { client } from "../lib/client";
import PortableText from "@sanity/block-content-to-react";

const Courses = ({ courses }) => {
  courses.sort((a, b) =>
    a.position > b.position ? 1 : b.position > a.position ? -1 : 0
  );
  return (
    <div className="course-gallery">
      {courses.map((el, index) => {
        return (
          <div className="course" key={el._id}>
            <div className="course-body">
              <div className="course-title">{el.title}</div>
              <PortableText className="course-desc" blocks={el.description} />
            </div>
            <div className="course-footer">
              <div className="footer-details course-duration">
                {el.duration}
              </div>
              <div className="footer-details course-price">{el.price}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Courses;

export const getServerSideProps = async () => {
  const courses = await client.fetch(`*[_type == "courses"]`);
  return {
    props: {
      courses,
    },
  };
};

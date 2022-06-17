import { client } from "../lib/client";

const Courses = ({ courses }) => {
  console.log(courses);
  return (
    <div>
      {courses.map((el, index) => {
        return <div key={el._id}>{el.title}</div>;
      })}
    </div>
  );
};

export default Courses;

export const getStaticProps = async () => {
  const courses = await client.fetch(`*[_type == "courses"]`);
  return {
    props: {
      courses,
    },
  };
};

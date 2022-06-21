// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import demoLectures from "./demoLectures";
import banner from "./banner";
import testimonial from "./testimonial";
import courses from "./courses";
import imageGallery from "./imageGallery";
import videoGallery from "./videoGallery";
import aboutPace from "./aboutPace";
import aboutMentor from "./aboutMentor";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    demoLectures,
    banner,
    testimonial,
    courses,
    imageGallery,
    videoGallery,
    aboutPace,
    aboutMentor,
  ]),
});

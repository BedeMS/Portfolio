import uniqid from "uniqid"; 
import jobIncBackground from "./jobincBackground.png";
import video from "../../assets/videos/practice.mov";

export default {
  id: uniqid(),
  title: "Job Inc",
  stack: ["react", "css3"],
  backgroundImg: jobIncBackground,
  link: "www.bedemarcos.com",
  github: "www.github.com/bedemarcos",
  details: ["Employer/Employee", "Job Search", "Create Job Post"],
  video: video,
  zoom: false,
  features: [
    {
      desc: ["Cart Feature", "Updated on every page"],
      featureImg: jobIncBackground,
    },
    {
      desc: ["Cart Feature", "Updated on every page"],
      featureImg: jobIncBackground,
      small: true,
    },
    {
      desc: ["Cart Feature", "Updated on every page"],
      featureImg: jobIncBackground,
      small: true,
      reverse: true,
    },
    {
      desc: ["Cart Feature", "Updated on every page"],
      featureImg: jobIncBackground,
      reverse: true,
    },
  ],
};

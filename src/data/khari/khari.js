import uniqid from "uniqid";
import khariBackground from "./khariBackground.png";
import video from "../../assets/videos/practice.mov";

export default {
  id: uniqid(),
  title: "Khari",
  stack: ["js", "css3"],
  backgroundImg: khariBackground,
  link: "www.khari.com",
  github: "www.github.com/bedemarcos",
  details: ["Apparel Store", "Modern Design", "E-commerce (Front-End only)"],
  video: video,
  zoom: false,
  features: [
    {
      desc: ["Cart Feature", "Updated on every page"],
      featureImg: khariBackground,
      small: true,
    },
  ],
};

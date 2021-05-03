import uniqid from "uniqid";
import webdevBackground from "./webdevBackground.png";
import video from "../../assets/videos/practice.mov";

export default {
  id: uniqid(),
  title: "Web Dev Roadmap",
  stack: ["js", "sass"],
  backgroundImg: webdevBackground,
  link: "www.webdev.com",
  github: "www.github.com/bedemarcos",
  details: ["Developer Guide", "Self Taught Roadmap", "Cirricullum"],
  video: video,
  zoom: true,
  features: [
    {
      desc: ["Cart Feature", "Updated on every page"],
      featureImg: webdevBackground,
      small: true,
    },
  ],
};

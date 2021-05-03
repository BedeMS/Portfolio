import uniqid from "uniqid";
import visitEthiopiaBackground from "./visitEthiopiaBackground.png";
import video from "../../assets/videos/practice.mov";

export default {
  id: uniqid(),
  title: "Visit Ethiopia",
  stack: ["js", "sass"],
  backgroundImg: visitEthiopiaBackground,
  link: "www.visitEthiopia.com",
  github: "www.github.com/bedemarcos",
  details: ["Tourism", "Travel Assitance", "Map Guide"],
  video: video,
  zoom: false,
  features: [
    {
      desc: ["Cart Feature", "Updated on every page"],
      featureImg: visitEthiopiaBackground,
      small: true,
    },
  ],
};

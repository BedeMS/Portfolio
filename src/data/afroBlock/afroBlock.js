import uniqid from "uniqid";
import afroblockBackground from "./afroblockBackground.png";
import video from "../../assets/videos/practice.mov";

export default {
  id: uniqid(),
  title: "Afro-Block",
  stack: ["js", "sass"],
  backgroundImg: afroblockBackground,
  link: "www.afro-block.com",
  github: "www.github.com/bedemarcos",
  details: ["African Promotion", "Afro Business Community"],
  video: video,
  zoom: true,
  features: [
    {
      desc: ["Cart Feature", "Updated on every page"],
      featureImg: afroblockBackground,
      small: true,
    },
  ],
};

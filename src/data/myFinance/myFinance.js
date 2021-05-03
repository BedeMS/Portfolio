import uniqid from "uniqid";
import myfinanceBackground from "./myfinanceBackground.png";
import video from "../../assets/videos/practice.mov";

export default {
  id: uniqid(),
  title: "My Finances",
  stack: ["react", "css3"],
  backgroundImg: myfinanceBackground,
  link: "www.myfinance.com",
  github: "www.github.com/bedemarcos",
  details: ["Personal Finance", "Asset Manager", "Goal Tracker"],
  video: video,
  zoom: false,
  features: [
    {
      desc: ["Cart Feature", "Updated on every page"],
      featureImg: myfinanceBackground,
      small: true,
    },
  ],
};

import uniqid from "uniqid";
import jobIncBackground from "../assets/img/jobincBackground.png";
import video from "../assets/videos/practice.mov";

export default [
  {
    id: uniqid(),
    title: "Portfolio",
    stack: ["react", "css"],
    backgroundImg: jobIncBackground,
    link: "www.bedemarcos.com",
    github: "www.github.com/bedemarcos",
    video: video,
    features: [
      {
        desc: ["Cart Feature", "Updated on every page"],
        featureImg: jobIncBackground,
      },
    ],
  },
];

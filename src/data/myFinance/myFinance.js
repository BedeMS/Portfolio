import uniqid from "uniqid";
import myfinanceBackground from "./myfinanceBackground.png";
import grid from "./grid.png";
import form from "./form.png";
import video from "./myFinanceVideo.mov";

export default {
  id: "myFinances",
  title: "My Finances",
  stack: ["react", "css3"],
  backgroundImg: myfinanceBackground,
  // link: "www.myfinance.com",
  // github: "www.github.com/bedemarcos",
  details: ["*(Currently in Progress)*", "Personal Finance", "Asset Manager", "Goal Tracker"],
  video: video,
  zoom: false,
  features: [
    {
      desc: ["Real Estate Account Data", "Controlled Input"],
      featureImg: form,
      // small: true,
    },    
    {
      desc: ["Dashboard Layout", "Responsive Grid"],
      featureImg: grid,
      // small: true,
    }
  ],
};

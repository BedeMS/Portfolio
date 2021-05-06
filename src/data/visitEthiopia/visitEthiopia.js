import visitEthiopiaBackground from "./visitEthiopiaBackground.png";
import slider from "./slider.png";
import menu from "./menu.png";
import mapData from "./mapData.png";
import imageSlide from "./imageSlide.png";
import map from "./map.png";
import video from "./visitEthiopiaVideo.mov";

const visitEthiopia = {
  id: "visitEthiopia",
  title: "Visit Ethiopia",
  stack: ["js", "sass"],
  backgroundImg: visitEthiopiaBackground,
  link: "https://www.visit-Ethiopia.org",
  github: "https://www.github.com/BedeMS/visitEthiopia",
  details: ["Tourism", "Travel Assitance", "Map Guide"],
  video: video,
  zoom: false,
  features: [
    {
      desc: ["Interactive Map", "Updated on Click"],
      featureImg: map,
    },
    {
      desc: ["Data updated with Map", "Changes Map location"],
      featureImg: mapData,
      reverse: true,
    },
    {
      desc: ["Options Slider", "Responsive slider"],
      featureImg: slider,
      small: true,
    },
    {
      desc: ["Responsive Image Sliders"],
      featureImg: imageSlide,
      small: true,
      reverse: true,
    },
    {
      desc: ["Drop-Down Menu"],
      featureImg: menu,
      small: true,
    },
  ],
};

export default visitEthiopia;

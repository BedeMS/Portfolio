import uniqid from "uniqid";
import afroblockBackground from "./afroblockBackground.png";
import responsive from "./responsive.png";
import formControl from "./formControl.png";
import formValidation from "./formControl2.png";
import layout from "./layout.png";
import afroBlockVideo from "./afroBlockVideo.mov";

export default {
  id: uniqid(),
  title: "Afro-Block",
  stack: ["js", "sass"],
  backgroundImg: afroblockBackground,
  link: "www.afro-block.com",
  github: "www.github.com/bedemarcos",
  details: ["African Promotion", "Afro Business Community"],
  video: afroBlockVideo,
  zoom: true,
  features: [
    {
      desc: ["Modern Design", "Sleek Layout"],
      featureImg: layout,
    },
    {
      desc: ["Animated Form", "Responsive Form"],
      featureImg: formControl,
      small: true,
    },
    {
      desc: ["Form Validation"],
      featureImg: formValidation,
      small: true,
      reverse: true,
    },
    {
      desc: ["Responsive Design"],
      featureImg: responsive,
    },
  ],
};

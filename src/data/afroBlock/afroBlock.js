import afroblockBackground from "./afroblockBackground.png";
import responsive from "./responsive.png";
import formControl from "./formControl.png";
import formValidation from "./formValidation.png";
import layout from "./layout.png";
import afroBlockVideo from "./afroBlockVideo.mov";

const afroBlock = {
  id: "afroBlock",
  title: "Afro-Block",
  stack: ["js", "sass"],
  backgroundImg: afroblockBackground,
  link: "www.afro-block.co",
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
      reverse: true,
    },
    {
      desc: ["Form Validation", "User friendly Design"],
      featureImg: formValidation,
      small: true,
    },
    {
      desc: ["Responsive Design"],
      featureImg: responsive,
      reverse: true,
    },
  ],
};

export default afroBlock;

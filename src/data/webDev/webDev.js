import webdevBackground from "./webdevBackground.png";
import responsive from "./responsive.png";
import formData from "./formData.png";
import form from "./form.png";
import animatedBackground from "./animatedBackground.png";
import animatedBackground2 from "./animatedBackground2.png";
import video from "./webDevVideo.mov";

const webDev = {
  id: "webDev",
  title: "Web Dev Roadmap",
  stack: ["js", "sass"],
  skills: ["Canvas", "Animations"],
  backgroundImg: webdevBackground,
  link: "https://www.webdevroadmaps.com",
  github: "https://www.github.com/BedeMS/roadmap",
  details: ["Developer Guide", "Self Taught Roadmap", "Cirriculum"],
  video: video,
  zoom: true,
  features: [
    {
      desc: ["Canvas Animation", "Lines Changing on Y and X", "Random Colors"],
      featureImg: animatedBackground2,
      // small: true,
    },
    {
      desc: [
        "Canvas Animation Change on Click",
        "Lines connecting with Closest Dots",
        "Random Colors",
      ],
      featureImg: animatedBackground,
      reverse: true,
    },
    {
      desc: ["User Data", "Form Validation"],
      featureImg: form,
    },
    {
      desc: ["Data Rendered Based on User Input", "User Specific Message"],
      featureImg: formData,
      small: true,
      reverse: true,
    },
    {
      desc: ["Responsive Design"],
      featureImg: responsive,
    },
  ],
};

export default webDev;
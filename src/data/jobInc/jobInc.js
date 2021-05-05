import uniqid from "uniqid";
import jobIncBackground from "./jobincBackground.png";
import companies from "./companies.png";
import editJob from "./editJob.png";
import follow from "./follow.png";
import saved from "./saved.png";
import formValidation from "./formValidation.png";
import featuredJobs from "./featuredJobs.png";

import video from "./jobIncVideo.mov";

export default {
  id: "jobInc",
  title: "Job Inc",
  stack: ["react", "css3"],
  backgroundImg: jobIncBackground,
  link: "www.bedemarcos.com",
  github: "www.github.com/bedemarcos",
  details: ["Employer/Employee", "Job Search", "Create Job Post"],
  video: video,
  zoom: false,
  features: [
    {
      desc: ["Featured Jobs Section", "Top Jobs / Promoted Jobs"],
      featureImg: featuredJobs,
      small: true,
    },
    {
      desc: [
        "Featured Companies Section",
        "Top Companies / Promoted Companies",
      ],
      featureImg: companies,
      small: true,
      reverse: true,
    },
    {
      desc: ["Ability to Save Jobs"],
      featureImg: saved,
      small: true,
      reverse: true,
    },
    {
      desc: ["Follow Companies"],
      featureImg: follow,
      small: true,
    },
    {
      desc: ["Create Job", "Form Validation"],
      featureImg: formValidation,
      small: true,
    },
    {
      desc: ["Manage Jobs", "Edit Job Post", "Delete Post"],
      featureImg: editJob,
      small: true,
      reverse: true,
    },
  ],
};

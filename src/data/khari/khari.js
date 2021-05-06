
import khariBackground from "./khariBackground.png";
import cart from "./cart.png";
import cartOptions from "./cartOptions.png";
import featuredProduct from "./featuredProduct.png";
import products from "./products.png";
import responsive from "./responsive.png";
import selector from "./selector.png";
import video from "./khariVideo.mov";

const khari = {
  id: "khari",
  title: "Khari",
  stack: ["js", "css3"],
  backgroundImg: khariBackground,
  link: "www.khari.ca",
  github: "www.github.com/bedemarcos",
  details: ["Apparel Store", "Modern Design", "E-commerce (Front-End only)"],
  video: video,
  zoom: false,
  features: [
    {
      desc: ["Cart Feature", "Number of Items", "Updated on every page"],
      featureImg: cart,
      small: true,
    },
    {
      desc: ["Delete", "Edit", "Updated Prices"],
      featureImg: cartOptions,
      reverse: true,
    },
    {
      desc: ["Various Product Selection", "Sub-Category on each Product"],
      featureImg: products,
    },
    {
      desc: ["Showcase Feature Product", "Multiple Features"],
      featureImg: featuredProduct,
      small: true,
      reverse: true,
    },
    {
      desc: ["Size based on Availability", "Color based on Availability"],
      featureImg: selector,
      small: true,
    },
    {
      desc: ["Responsive", "Sleek Modern Design"],
      featureImg: responsive,
    },
  ],
};

export default khari;

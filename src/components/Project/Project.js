import React from "react";
import Heading from "../../elements/Heading/Heading";
import "./Project.css";
import Card from "../Card/Card";
import ZoomCard from "../Card/Zoom/ZoomCard";
import Modal from "../Modal/Modal";

function Project(props) {
  const img =
    "https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg";
  return (
    <Modal />
    // <div className="Project">
    //   {/* <Heading title="Asset Management" /> */}
    //   <div className="Project__card">
    //     {/* each project will need all of these */}
    //     {props.zoom ? (
    //       <ZoomCard
    //         img={img}
    //         title="Asset Management"
    //         stack={["react", "css3", "js"]}
    //         details={["Financial App", "Shopping Cart", "Interactive Map"]}
    //       />
    //     ) : (
    //       <Card
    //         img={img}
    //         title="Asset Management"
    //         stack={["react", "css3", "js"]}
    //         details={["Financial App", "Shopping Cart", "Interactive Map"]}
    //       />
    //     )}
    //   </div>
    // </div>
  );
}

export default Project;

// title={props.title}

import React from "react";
import Project from "../../components/Project/Project";
import Modal from "../../components/Modal/Modal";
import uniqid from "uniqid";
import "./Projects.css";

function Projects({data, openModal, modalProject, modal, toggleModal}) {


  return (
    <div className="Projects">
      <div className="Project__set">
        {data.map((project) => {
          return (
            <Project key={uniqid()} handleClick={openModal} {...project} />
          );
        })}
      </div>
      {modal && <Modal closeModal={toggleModal} project={modalProject} />}
    </div>
  );
}

export default Projects;

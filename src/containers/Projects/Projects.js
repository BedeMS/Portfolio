import React, { useState } from "react";
import Project from "../../components/Project/Project";
// import useToggle from "../../hooks/useToggleHook";
import Modal from "../../components/Modal/Modal";
// import data from "../../data/projects";
import uniqid from "uniqid";
import "./Projects.css";

function Projects({data, openModal, modalProject, modal, toggleModal}) {
  // const [modalProject, setModalProject] = useState({});
  // const [modal, toggleModal] = useToggle();

  // const openModal = (id) => {
  //   setModalProject(getProject(id));
  //   toggleModal();
  // };

  // const getProject = (id) => {
  //   const [project] = data.filter((project) => project.id === id);
  //   return project;
  // };

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

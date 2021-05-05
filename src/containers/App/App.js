import React, { useState } from "react";
import useToggle from "../../hooks/useToggleHook";

import { Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Nav from "../../components/Nav/Nav";
import Confirmation from "../Contact/Confirmation/Confirmation";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import "./App.css";
import data from "../../data/projects";

library.add(far, fab, fas);

function App() {
  const [modalProject, setModalProject] = useState({});
  const [modal, toggleModal] = useToggle();

  const openModal = (id) => {
    setModalProject(getProject(id));
    toggleModal();
  };

  const getProject = (id) => {
    const [project] = data.filter((project) => project.id === id);
    return project;
  };

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route
          exact
          path="/Contact"
          render={(routeProps) => <Contact {...routeProps} />}
        />
        <Route exact path="/About" render={() => <About />} />
        <Route
          exact
          path="/Projects"
          render={() => (
            <Projects
              data={data}
              openModal={openModal}
              modal={modal}
              modalProject={modalProject}
              toggleModal={toggleModal}
            />
          )}
        />
        <Route exact path="/Confirmation" render={() => <Confirmation />} />
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <Home {...routeProps} openModal={openModal} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;

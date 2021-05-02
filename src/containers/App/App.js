import React from "react";
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
import emailjs, { init } from "emailjs-com";

// init("user_weN16nmdoy17uIQkz6WIW");

library.add(far, fab, fas);

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/Contact" render={routeProps => <Contact {...routeProps} />} />
        <Route exact path="/About" render={() => <About />} />
        <Route exact path="/Projects" render={() => <Projects />} />
        <Route exact path="/Confirmation" render={() => <Confirmation />} />
        <Route exact path="/" render={() => <Home />} />
      </Switch>
    </div>
  );
}

export default App;

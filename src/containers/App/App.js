import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import "./App.css";

library.add(far, fab, fas);

function App() {
  return <Projects />;
}

export default App;

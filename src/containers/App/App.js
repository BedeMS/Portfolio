import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import Nav from "../../components/Nav/Nav";

library.add(far, fab, fas);

function App() {
  return (
    <div className="Home">
      <Nav />
    </div>
  );
}

export default App;

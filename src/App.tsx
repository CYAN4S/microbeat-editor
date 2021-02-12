import React from "react";
import logo from "./logo.svg";
import "./App.css";

import DescEditor from "./components/DescEditor";
import ChartEditor from "./components/ChartEditor";

function App() {
  return (
    <div className="App">
      <div className="editors">
        <DescEditor />
        <ChartEditor />
      </div>
    </div>
  );
}

export default App;

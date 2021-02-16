import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Radio from "./components/Radio";

import DescEditor from "./components/DescEditor";
import ChartEditor from "./components/ChartEditor";

function App() {
  const [state, setState] = useState("Desc");
  const radioenv = {
    name: "state",
    onChange: (ev: React.ChangeEvent<HTMLInputElement>) => {
      setState(ev.target.value);
    },
    state: state,
  };

  return (
    <div className="App" style={{display: "flex", gap: "20px"}}>
      <nav>
        <Radio env={radioenv} value="Desc" /> Desc
        <br />
        <Radio env={radioenv} value="Chart" /> Chart
      </nav>
      <div className="editors">
        {state == "Desc" ? <DescEditor /> : "Chart" ? <ChartEditor /> : <> </>}
      </div>
    </div>
  );
}

export default App;

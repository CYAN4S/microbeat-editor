import React, { useState } from "react";

function DescEditor() {
  const [state, setState] = useState({
    name: "",
    artist: "",
    genre: "",
    bpm: 0,
  })

  const handleSave = () => {

  }

  const handleInputChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
    if (target.name in state) {
      setState({...state, [target.name]: target.value})
    }
  }

  return <div className="DescEditor">
    <form action="">
      <label>이름</label>
      <input type="text" name="name" value={state.name} onChange={handleInputChange}/>

      <label>아티스트</label>
      <input type="text" name="artist" value={state.artist} onChange={handleInputChange}/>

      <label>장르</label>
      <input type="text" name="genre" value={state.genre} onChange={handleInputChange}/>

      <label>BPM</label>
      <input type="number" name="bpm" value={state.bpm} onChange={handleInputChange}/>

      <input type="button" value="Save" onClick={handleSave}/>

      <pre>
        {JSON.stringify(state)}
      </pre>
    </form>
  </div>;
}

export default DescEditor;

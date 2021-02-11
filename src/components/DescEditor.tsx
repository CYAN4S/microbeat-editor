import React, { useState } from "react";

import Bpm from "./Bpm";
import BpmEditor from "./BpmEditor";

function DescEditor() {
  const [state, setState] = useState({
    name: "",
    artist: "",
    genre: "",
    bpm: 0,
    musicPath: "",
    previewImgPath: "",
    smallImgPath: "",
    imgPath: "",
    mvPath: "",
  });
  const [addBpms, setAddBpms] = useState(false);
  const [bpms, setBpms] = useState<Bpm[]>([]);

  const handleSave = () => {
    let x = document.createElement('a');
    x.download = "data.json";
    x.href = window.URL.createObjectURL(new Blob([getJson()], {type: 'text/plain'}))
    x.click();
  };

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.name in state) {
      setState({ ...state, [target.name]: target.value });
    }
  };

  const handleNumberChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.name in state) {
      setState({ ...state, [target.name]: +target.value });
    }
  };

  const handleAddBpmsChange = ({
    target: { checked },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setAddBpms(checked);
  };

  const handleAddNew = (value: Bpm) => {
    setBpms([...bpms, value].sort((a, b) => a.beat - b.beat));
  };

  const handleDelete = (i: number) => {
    let x = [...bpms];
    x.splice(i, 1);
    setBpms(x);
  }

  const getJson = () => 
    JSON.stringify(
      addBpms ? { ...state, bpms } : state,
      (k, v) => (v == "" && typeof(v) == "string" ? undefined : v),
      2
    )

  return (
    <div className="DescEditor">
      <form>
        <label>이름</label>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleInputChange}
        />
        <br />
        <label>아티스트</label>
        <input
          type="text"
          name="artist"
          value={state.artist}
          onChange={handleInputChange}
        />
        <br />
        <label>장르</label>
        <input
          type="text"
          name="genre"
          value={state.genre}
          onChange={handleInputChange}
        />
        <br />
        <label>BPM</label>
        <input
          type="number"
          name="bpm"
          value={state.bpm}
          onChange={handleNumberChange}
        />
        <br />
        <label>음악 파일 경로</label>
        <input
          type="text"
          name="musicPath"
          value={state.musicPath}
          onChange={handleInputChange}
        />
        <br />
        <label>프리뷰 이미지 경로</label>
        <input
          type="text"
          name="previewImgPath"
          value={state.previewImgPath}
          onChange={handleInputChange}
        />
        <br />
        <label>작은 이미지 경로</label>
        <input
          type="text"
          name="smallImgPath"
          value={state.smallImgPath}
          onChange={handleInputChange}
        />
        <br />
        <label>아이캐치 이미지 경로</label>
        <input
          type="text"
          name="imgPath"
          value={state.imgPath}
          onChange={handleInputChange}
        />
        <br />
        <label>뮤직비디오 경로</label>
        <input
          type="text"
          name="mvPath"
          value={state.mvPath}
          onChange={handleInputChange}
        />
        <br />
        <label>변속 여부</label>
        <input
          type="checkbox"
          name="addBpms"
          checked={addBpms}
          onChange={handleAddBpmsChange}
        />
        {addBpms ? <BpmEditor bpms={bpms} onAddNew={handleAddNew} onDelete={handleDelete}/> : <></>}
      </form>
      <input type="button" value="Save" onClick={handleSave} />

      <p className="result">
        {getJson()}
      </p>
    </div>
  );
}

export default DescEditor;

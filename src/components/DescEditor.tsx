import React, { useState } from "react";

import Bpm from "./Bpm";
import BpmEditor from "./BpmEditor";

import Input from "../forms/Input";

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
    let x = document.createElement("a");
    x.download = ".mcbdesc";
    x.href = window.URL.createObjectURL(
      new Blob([getJson()], { type: "text/plain" })
    );
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
  };

  const getJson = () =>
    JSON.stringify(
      addBpms ? { ...state, bpms } : state,
      (k, v) => (v == "" && typeof v == "string" ? undefined : v),
      2
    );

  return (
    <div className="DescEditor">
      <form>
        <h3>기본 곡 정보</h3>
        <Input
          label="음악 이름"
          name="name"
          value={state.name}
          onChange={handleInputChange}
          required={true}
        />
        <Input
          label="아티스트"
          name="artist"
          value={state.artist}
          onChange={handleInputChange}
          required={true}
        />
        <Input
          label="장르"
          name="genre"
          value={state.genre}
          onChange={handleInputChange}
          required={true}
        />
        <Input
          label="기준 BPM"
          name="bpm"
          value={state.bpm}
          onChange={handleNumberChange}
          type="number"
          required={true}
        />
        <h3>파일 경로</h3>
        <Input
          label="음악 파일 경로"
          name="musicPath"
          value={state.musicPath}
          onChange={handleInputChange}
          required={true}
        />
        <Input
          label="아이캐치 이미지 경로"
          name="imgPath"
          value={state.imgPath}
          onChange={handleInputChange}
        />
        <Input
          label="작은 이미지 경로"
          name="smallImgPath"
          value={state.smallImgPath}
          onChange={handleInputChange}
        />
        <Input
          label="미리보기 이미지 경로"
          name="previewImgPath"
          value={state.previewImgPath}
          onChange={handleInputChange}
        />
        <Input
          label="뮤직비디오 경로"
          name="mvPath"
          value={state.mvPath}
          onChange={handleInputChange}
        />
        <h3>변속 관리</h3>
        <Input
          label="변속 기능"
          name="addBpms"
          checked={addBpms}
          onChange={handleAddBpmsChange}
          type="checkbox"
          trueLabel="활성화"
          falseLabel="비활성화"
        />

        <br />
      </form>
      {addBpms ? (
        <BpmEditor
          bpms={bpms}
          onAddNew={handleAddNew}
          onDelete={handleDelete}
        />
      ) : (
        <></>
      )}
      <form>
        <h3>미리보기</h3>
        <pre className="result">{getJson()}</pre>
        <input type="button" value="저장" onClick={handleSave} />
      </form>
    </div>
  );
}

export default DescEditor;

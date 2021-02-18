import React, { useState, useEffect } from "react";
import Bpm from "./Bpm";


function BpmEditor(props: { bpms: Bpm[]; onAddNew: (value: Bpm) => void; onDelete:(i: number) => void }) {
  const [inputBpm, setInputBpm] = useState(new Bpm(0, 0));
  const [bpms, setBpms] = useState(props.bpms);

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputBpm({ ...inputBpm, [target.name]: +target.value });
  };

  const onAddNew = () => {
    props.onAddNew(inputBpm);
    setInputBpm(new Bpm(0, 0));
  };
  
  const onDelete = (i: number) => {
    props.onDelete(i);
  }

  useEffect(() => {
    setBpms(props.bpms);
  }, [props.bpms]);

  return (
    <form>
      <h3>변속 편집</h3>
      {bpms.map((bpm, i) => (
        <div key={`${i}/${bpm}`}>
          ({i}) {bpm.beat} / {bpm.bpm} BPM
          <input type="button" value="삭제" onClick={() => onDelete(i)}/>
        </div>
      ))}
      <input
        type="number"
        value={inputBpm.beat}
        name="beat"
        onChange={handleInputChange}
      />
      <input
        type="number"
        value={inputBpm.bpm}
        name="bpm"
        onChange={handleInputChange}
      />
      <input type="button" value="Add new" onClick={onAddNew} />
    </form>
  );
}

export default BpmEditor;

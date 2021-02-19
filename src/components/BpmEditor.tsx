import React, { useState, useEffect } from "react";
import Bpm from "./Bpm";

import style from "../forms/Table.module.css";

function BpmEditor(props: {
  bpms: Bpm[];
  onAddNew: (value: Bpm) => void;
  onDelete: (i: number) => void;
}) {
  const [inputBpm, setInputBpm] = useState(new Bpm(0, 0));
  const [bpms, setBpms] = useState(props.bpms);

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputBpm({ ...inputBpm, [target.name]: +target.value });
  };

  const onAddNew = () => {
    props.onAddNew(inputBpm);
  };

  const onDelete = (i: number) => {
    props.onDelete(i);
  };

  useEffect(() => {
    setBpms(props.bpms);
  }, [props.bpms]);

  return (
    <form>
      <h3>변속 편집</h3>
      <table className={style.table}>
        <thead>
          <tr>
            <th>순서</th>
            <th>적용 시작 박자</th>
            <th>적용 BPM</th>
            <th>적용 시작 시간</th>
          </tr>
        </thead>
        <tbody>
          {bpms.map((bpm, i) => (
            <tr key={`${i}-bpmtable`}>
              <td>{i}</td>
              <td>{bpm.beat}</td>
              <td>{bpm.bpm}</td>
              <td>{bpm.bpm}</td>
              <td>
                <input type="button" value="삭제" onClick={() => onDelete(i)} />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>-</th>
            <th>
              <input
                type="number"
                value={inputBpm.beat}
                name="beat"
                onChange={handleInputChange}
              />
            </th>
            <th>
              <input
                type="number"
                value={inputBpm.bpm}
                name="bpm"
                onChange={handleInputChange}
              />
            </th>
            <th>-</th>
            <th>
              <input type="button" value="추가" onClick={onAddNew} />
            </th>
          </tr>
        </tfoot>
      </table>
    </form>
  );
}

export default BpmEditor;

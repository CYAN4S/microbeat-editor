import React, { useState } from "react";
import {Note, LongNote} from "./Note";

function ChartEditor() {
  const [detail, setDetail] = useState({ line: 4, level: 1, diff: 0 });
  const [notes, setNotes] = useState<Note[]>([])
  const [longNotes, setLongNotes] = useState<LongNote[]>([])
  const [currentBeat, setCurrentBeat] = useState(0)

  const onRadioChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {

  }

  return (
    <div>
      <h2>ChartEditor</h2>
      <form>
        <div className="form-grid">
          <label>버튼 수</label>
          <div>
            4:<input type="radio" name="line" value={4} onChange={onRadioChange} checked/>
            5:<input type="radio" name="line" value={5} onChange={onRadioChange}/>
            6:<input type="radio" name="line" value={6} onChange={onRadioChange}/>
            8:<input type="radio" name="line" value={8} onChange={onRadioChange}/>
          </div>
          <label>레벨</label>
        </div>
      </form>
    </div>
  );
}

export default ChartEditor;

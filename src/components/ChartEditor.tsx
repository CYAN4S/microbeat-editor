import React, { useState } from "react";
import { Note, LongNote } from "./Note";
import Radio from "./Radio";
import NoteListEditor from "./NoteListEditor";
import LongNoteListEditor from "./LongNoteListEditor";
import PatternEditor from "./PatternEditor";

function ChartEditor() {
  const [detail, setDetail] = useState({ line: 4, level: 1, diff: 0 });
  const [notes, setNotes] = useState<Note[]>([]);
  const [longNotes, setLongNotes] = useState<LongNote[]>([]);

  const onRadioChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setDetail({ ...detail, [target.name]: +target.value });
  };

  const diffName = ["ORG", "SNT", "ADV", "HYP", "EXC"];

  const handleNumberChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.name in detail) {
      setDetail({ ...detail, [target.name]: +target.value });
    }
  };

  const handleSave = () => {
    let x = document.createElement("a");
    x.download = `${detail.line}k${diffName[
      detail.diff
    ].toLowerCase()}.mcbchart`;
    x.href = window.URL.createObjectURL(
      new Blob([getJson()], { type: "text/plain" })
    );
    x.click();
  };

  const handleAddNewNote = (value: Note) => {
    setNotes([...notes, value].sort((a, b) => a.beat - b.beat))
  }

  const handleDeleteNote = (i: number) => {
    let x = [...notes];
    x.splice(i, 1);
    setNotes(x);
  }

  const handleAddNewLongNote = (value: LongNote) => {
    setLongNotes([...longNotes, value].sort((a, b) => a.beat - b.beat))
  }

  const handleDeleteLongNote = (i: number) => {
    let x = [...longNotes];
    x.splice(i, 1);
    setLongNotes(x);
  }

  const lineRadioEnv = {
    name: "line",
    onChange: onRadioChange,
    state: detail.line,
  };

  const diffRadioEnv = {
    name: "diff",
    onChange: onRadioChange,
    state: detail.diff,
  };

  const getJson = () => {
    return JSON.stringify({ ...detail, notes, longNotes }, null, 4);
  };

  return (
    <div>
      <h2>ChartEditor</h2>
      <form>
        <h3>기본 사항</h3>
        <div className="form-grid">
          <label>버튼 수</label>
          <div>
            4:
            <Radio env={lineRadioEnv} value={4} />
            5:
            <Radio env={lineRadioEnv} value={5} />
            6:
            <Radio env={lineRadioEnv} value={6} />
            8:
            <Radio env={lineRadioEnv} value={8} />
          </div>

          <label>레벨</label>
          <input
            type="number"
            name="level"
            value={detail.level}
            onChange={handleNumberChange}
            min={1}
            max={20}
          />

          <label>난이도 종류</label>
          <div>
            ORG:
            <Radio env={diffRadioEnv} value={0} />
            SNT:
            <Radio env={diffRadioEnv} value={1} />
            ADV:
            <Radio env={diffRadioEnv} value={2} />
            HYP:
            <Radio env={diffRadioEnv} value={3} />
            EXC:
            <Radio env={diffRadioEnv} value={4} />
          </div>
        </div>
      </form>
      <h3>노트 정보 수정</h3>
      <NoteListEditor notes={notes} onAddNew={handleAddNewNote} onDelete={handleDeleteNote}/>
      <h3>롱노트 정보 수정</h3>
      <LongNoteListEditor longNotes={longNotes} onAddNew={handleAddNewLongNote} onDelete={handleDeleteLongNote}/>
      <h3>그래픽 인터페이스</h3>
      <PatternEditor />
      <h3>미리보기</h3>

      <pre className="result">{getJson()}</pre>
      <input type="button" value="저장" onClick={handleSave} />
    </div>
  );
}

export default ChartEditor;

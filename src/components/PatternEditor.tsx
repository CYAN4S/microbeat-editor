import React, { useEffect, useState } from "react";
import { getLineAndCharacterOfPosition } from "typescript";
import { LongNote, Note } from "./Note";
import NoteListEditor from "./NoteListEditor";

function NoteGraphic(props: { line: number; beat: number; length?: number }) {
  return (
    <div
      className="pattern-note"
      style={{
        height: `${props.length ? props.length * 200 + 20 : 20}px`,
        width: "80px",
        backgroundColor: "darkcyan",
        position: "absolute",
        top: props.beat * 200,
        left: props.line * 80,
        textAlign: "center",
        transform: "scaleY(-1)"
      }}
    >
      <span>{props.beat}</span>
    </div>
  );
}

function PatternEditor(props: { notes: Note[]; longNotes: LongNote[] }) {
  const [notes, setNotes] = useState(props.notes);
  const [longNotes, setLongNotes] = useState(props.longNotes);

  useEffect(() => {
    setNotes(props.notes);
  }, [props.notes]);

  useEffect(() => {
    setLongNotes(props.longNotes);
  }, [props.longNotes]);

  return (
    <div className="pattern-editor">
      <div className="pattern-scrollview">
        <div className="pattern-container">
          {notes.map((v, i) => {
            return (
              <NoteGraphic
                line={v.line}
                beat={v.beat}
                key={`ptn${i}/${v.beat}/${v.line}`}
              />
            );
          })}
          {longNotes.map((v, i) => {
            return (
              <NoteGraphic
                line={v.line}
                beat={v.beat}
                length={v.length}
                key={`ptnl${i}/${v.beat}/${v.line}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PatternEditor;

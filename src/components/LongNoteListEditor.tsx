import React, { useState, useEffect } from "react";
import { LongNote } from "./Note";

function LongNoteListEditor(props: {
  longNotes: LongNote[];
  onAddNew: (value: LongNote) => void;
  onDelete: (i: number) => void;
}) {
  const [inputNote, setInputNote] = useState(new LongNote(0, 0, 0));
  const [notes, setNotes] = useState(props.longNotes);

  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputNote({ ...inputNote, [target.name]: +target.value });
  };

  const onAddNew = () => {
    props.onAddNew(inputNote);
    setInputNote(new LongNote(0, 0, 0));
  };

  const onDelete = (i: number) => {
    props.onDelete(i);
  };

  useEffect(() => {
    setNotes(props.longNotes);
  }, [props.longNotes]);

  return (
    <div>
      {notes.map((note, i) => (
        <div key={`${i}/${note}`}>
          ({i}) Line {note.line} / {note.beat} / {note.length} LENGTH
          <input type="button" value="삭제" onClick={() => onDelete(i)} />
        </div>
      ))}
      <input
        type="number"
        value={inputNote.line}
        name="line"
        onChange={handleInputChange}
      />
      <input
        type="number"
        value={inputNote.beat}
        name="beat"
        onChange={handleInputChange}
      />
      <input
        type="number"
        value={inputNote.length}
        name="length"
        onChange={handleInputChange}
      />
      <input type="button" value="Add new" onClick={onAddNew} />
    </div>
  );
}

export default LongNoteListEditor;
